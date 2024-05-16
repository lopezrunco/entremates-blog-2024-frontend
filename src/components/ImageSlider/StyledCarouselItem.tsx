import { CarouselItem } from 'reactstrap';
import styled from 'styled-components';

export const StyledCarouselItem = styled(CarouselItem)`
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
