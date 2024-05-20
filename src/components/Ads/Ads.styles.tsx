import styled from 'styled-components';
import { emyoyTheme } from '../../assets/styles/GlobalStyles';

const { grayColor } = emyoyTheme;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export const AdLink = styled.a`
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 250px;
        height: auto;
    }

    @media screen and (min-width: 1200px) {
        width: 300px;
    }
`;

export const AdImage = styled.img`
    width: 100%;
    border: 1px solid ${grayColor};
`;
