import { Col, Container, Row } from 'reactstrap';
import React from 'react';

import { contactData } from '../../data/contact';

export interface IContactItemProps {
    title: string;
    link: string;
    icon: JSX.Element;
    colsize: string;
}

const Bottom: React.FC = () => {
    return (
        <section className="bottom">
            <Container>
                <Row>
                    {contactData && contactData.map((el: IContactItemProps, i: number) => {
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
