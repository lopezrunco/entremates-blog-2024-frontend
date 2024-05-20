import { FaChevronRight } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Col } from 'reactstrap';
import React, { useState } from 'react';

export interface MagazineItemProps {
    imageSource: string;
    imageTitle: string;
    resume: string[];
}

const MagazineItem: React.FC<MagazineItemProps> = (props) => {
    const [openImage, setOpenImage] = useState(false);

    const toggleImageModal = () => setOpenImage(!openImage);

    return (
        <React.Fragment>
            <Col sm="6" md="4" lg="3" style={{ cursor: 'pointer' }}>
                <div className="magazine-item" onClick={toggleImageModal}>
                    <img width="100%" src={props.imageSource} alt={`Entre mates y otras yerbas ${props.imageTitle}`} />
                    <h6>{props.imageTitle}</h6>
                </div>
            </Col>
            <Modal isOpen={openImage} toggle={toggleImageModal} size="md">
                <ModalHeader toggle={toggleImageModal}>
                    <img width="100%" src={props.imageSource} alt={`Entre mates y otras yerbas ${props.imageTitle}`} />
                    {props.imageTitle}
                </ModalHeader>
                <ModalBody>
                    {props.resume.map((item, index) => (
                        <p key={index}>
                            <FaChevronRight /> {item}
                        </p>
                    ))}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleImageModal}>
                        Cerrar
                    </Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
};

export default MagazineItem;
