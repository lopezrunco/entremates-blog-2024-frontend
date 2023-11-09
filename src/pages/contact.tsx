import { Container } from 'reactstrap';
import React from 'react';

import IPageProps from '../interfaces/page';
import { contactData } from '../components/Bottom';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';

const ContactPage: React.FunctionComponent<IPageProps> = () => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header
                image="https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/c59ybusajcaxjzw3ngtg"
                headline="Vías de contacto para participar del programa."
                title="Contacto"
                height="300px"
            />
            <section className="contact light-img-bg">
                <Container>
                    <div className="flex">
                        <div className="contact-info">
                            <div className="grid">
                                {contactData.map((el, i) => {
                                    return (
                                        <a key={i} className="box" href={el.link} target="_blank" rel="noreferrer">
                                            <div>
                                                {el.icon}
                                                <p>{el.title}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="join-program">
                            <div className="flex">
                                <div className="join-img"></div>
                                <div>
                                    <h3>Participe de nuestro programa</h3>
                                    <hr />
                                    <p>De lunes a viernes de 00 a 03 am en Radio Carve</p>
                                    <p className="bold-700">
                                        Conducción: <span className="primary-color">Miguel Cabrera</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Bottom />
            <Footer />
        </Container>
    );
};

export default ContactPage;
