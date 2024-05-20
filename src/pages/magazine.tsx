import { Container, Row } from 'reactstrap';
import React from 'react';

import IPageProps from '../interfaces/page';

import { magazineList } from '../data/magazine';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import NewMagazine from '../components/NewMagazine';
import MagazineItem from '../components/MagazineItem';
import Footer from '../components/Footer';

import imageSrc from '../assets/images/manzanilla.webp';

// TO DO: Retrieve data from API and add pagination.

const MagazinePage: React.FC<IPageProps> = () => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header image={imageSrc} headline="Todas las ediciones de la revista de Entre mates y otras yerbas" title="Revista" height="300px" />
            <section className="magazine-grid light-img-bg">
                <Container>
                    <Row>
                        {magazineList.map(({ imageSource, imageTitle, resume }, index) => (
                            <MagazineItem key={index} imageSource={imageSource} imageTitle={imageTitle} resume={resume} />
                        ))}
                    </Row>
                </Container>
            </section>
            <NewMagazine />
            <Bottom />
            <Footer />
        </Container>
    );
};

export default MagazinePage;
