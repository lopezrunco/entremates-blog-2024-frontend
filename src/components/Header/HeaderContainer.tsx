import styled from 'styled-components';

export const HeaderContainer = styled.header<{ image?: string; height?: string }>`
    background: linear-gradient(rgba(36, 20, 38, 0.5), rgba(36, 39, 38, 0.5)), url(${(props) => props.image}) no-repeat center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: ${(props) => props.height};
`;
