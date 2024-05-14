import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaFacebookSquare } from 'react-icons/fa';
import { Col, Container, Row } from 'reactstrap';

interface IContactItemProps {
    title: string;
    link: string;
    icon: JSX.Element;
    colsize: string;
}

export const contactData: IContactItemProps[] = [
    {
        title: 'entrematesyotrasyerbas@gmail.com',
        link: 'mailto:entrematesyotrasyerbas@gmail.com',
        icon: <FaEnvelope className="icon" />,
        colsize: '5'
    },
    {
        title: '2900 7643',
        link: 'tel:+59829007643',
        icon: <FaPhoneAlt className="icon" />,
        colsize: '3'
    },
    {
        title: 'Entrematesyotrasyerbas',
        link: 'https://es-la.facebook.com/Entrematesyotrasyerbas/',
        icon: <FaFacebookSquare className="icon" />,
        colsize: '4'
    }
];

function Bottom() {
    return (
        <section className="bottom">
            <Container>
                <Row>
                    {contactData.map((el, i) => {
                        return (
                            <Col key={i} lg={el.colsize} className="contact-info-items">
                                <a href={el.link} target="_blank" rel="noreferrer">
                                    {el.icon}
                                    {el.title}
                                </a>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Bottom;
