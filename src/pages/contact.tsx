import { Container } from 'reactstrap';
import React from 'react';

import IPageProps from '../interfaces/page';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import ContactData from '../components/ContactData';
import JoinShow from '../components/JoinShow';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';

import headerImageSrc from '../assets/images/carqueja.webp';

const ContactPage: React.FC<IPageProps> = () => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header image={headerImageSrc} headline="Vías de contacto para participar del programa." title="Contacto" height="300px" />
            <section className="contact light-img-bg">
                <Container>
                    <div className="flex">
                        <div className="contact-info">
                            <div className="grid">
                                <ContactData />
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
