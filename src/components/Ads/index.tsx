import { Container } from 'reactstrap';
import React from 'react';

import { ads } from '../../data/ads';

import { AdImage, AdLink, FlexContainer } from './Ads.styles';

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
                <FlexContainer>
                    {ads.map((ad: IAdData, index: number) => {
                        if (ad.show) {
                            return (
                                <AdLink key={index} href={ad.link} target="_blank" rel="noreferrer">
                                    <AdImage src={ad.logo} alt={ad.altText} />
                                </AdLink>
                            );
                        }
                        return null;
                    })}
                </FlexContainer>
            </Container>
        </section>
    );
};

export default Ads;
