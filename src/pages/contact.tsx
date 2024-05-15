import { Container } from 'reactstrap';
import React from 'react';

import { contactData } from '../data/contact';

import IPageProps from '../interfaces/page';
import Bottom, { IContactItemProps } from '../components/Bottom';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import JoinShow from '../components/JoinShow';
import Footer from '../components/Footer';

const ContactPage: React.FC<IPageProps> = () => {
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
                                {contactData.map((el: IContactItemProps, i: number) => {
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
                        <JoinShow />
                    </div>
                </Container>
            </section>
            <Bottom />
            <Footer />
        </Container>
    );
};

export default ContactPage;
