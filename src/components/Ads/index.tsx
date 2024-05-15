import { Container } from 'reactstrap';
import React from 'react';

import { ads } from '../../data/ads';

export interface IAdData {
    altText: string;
    logo: string;
    link: string;
    show: boolean;
}

const Ads: React.FC = () => {
    return (
        <section className="ads light-img-bg">
            <Container>
                <div className="flex">
                    {ads.map((ad: IAdData, index: number) => {
                        if (ad.show) {
                            return (
                                <a key={index} href={ad.link} target="_blank" rel="noreferrer">
                                    <img src={ad.logo} alt={ad.altText} />
                                </a>
                            );
                        }
                        return null;
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Ads;
