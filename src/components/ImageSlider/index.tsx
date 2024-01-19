import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

interface ISliderItemProps {
    src: string;
    altText: string;
    showLogoDesktop: boolean;
    showLogoMobile: boolean;
    key: number;
}

const StyledCarousel = styled(Carousel)`
    height: 50vh;
    overflow: hidden;
`;

const StyledCarouselItem = styled(CarouselItem)`
    height: 50vh;

    img.bg-img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }

    img.logo {
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(50%);
    }
`;

const items: ISliderItemProps[] = [
    {
        src: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/zo02jpkqp1wo2oqezu3m',
        altText: 'Entre mates y otras yerbas Slide 1',
        showLogoDesktop: true,
        showLogoMobile: true,
        key: 1
    },
    {
        src: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/si1ty8bnzm96rnmj2eg0',
        altText: 'Entre mates y otras yerbas Slide 2',
        showLogoDesktop: true,
        showLogoMobile: true,
        key: 2
    },
    {
        src: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/c59ybusajcaxjzw3ngtg',
        altText: 'Entre mates y otras yerbas Slide 3',
        showLogoDesktop: true,
        showLogoMobile: true,
        key: 3
    }
];

const ImageSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const prev = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = items.map((item) => {
        return (
            <StyledCarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
                {item.showLogoDesktop && (
                    <img
                        src={
                            isMobile
                                ? 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/mvhnmlgeokatv0xzbhc0'
                                : 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/onrhr6r8gybmxkzy4ajj'
                        }
                        alt="Entre mates y ortas yerbas logo"
                        className="logo"
                    />
                )}
                <img src={item.src} alt={item.altText} className="bg-img" />
            </StyledCarouselItem>
        );
    });

    return (
        <StyledCarousel activeIndex={activeIndex} next={next} previous={prev} keyboard fade>
            {slides}
            <CarouselControl direction="prev" onClickHandler={prev} directionText=" " />
            <CarouselControl direction="next" onClickHandler={next} directionText=" " />
        </StyledCarousel>
    );
};

export default ImageSlider;
