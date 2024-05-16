import { CarouselControl } from 'reactstrap';
import React, { useState, useEffect } from 'react';

import { sliderItems } from '../../data/slider';
import { StyledCarousel } from './StyledCarousel';
import { StyledCarouselItem } from './StyledCarouselItem';

import mobileLogo from '../../assets/images/logo-mobile.webp';
import desktopLogo from '../../assets/images/logo-desktop.webp';

export interface ISliderItemProps {
    src: string;
    altText: string;
    showLogoDesktop: boolean;
    showLogoMobile: boolean;
    key: number;
}

const ImageSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [animating, setAnimating] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    useEffect(() => {
        const handleResize: EventListener = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === sliderItems.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const prev = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? sliderItems.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = sliderItems.map((item: ISliderItemProps) => {
        return (
            <StyledCarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
                {item.showLogoDesktop && <img src={isMobile ? mobileLogo : desktopLogo} alt="Entre mates y ortas yerbas logo" className="logo" />}
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
