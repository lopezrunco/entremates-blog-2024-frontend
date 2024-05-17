import { Col, Container, Row } from 'reactstrap';
import React from 'react';

import { IContactItemProps } from '../../interfaces/contactItem';

import { contactData } from '../../data/contact';

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
