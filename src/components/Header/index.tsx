import styled from 'styled-components';
import { Col, Container, Row } from 'reactstrap';
import React from 'react';

export interface IHeaderProps {
    height?: string;
    image?: string;
    title: string;
    headline: string;
    children?: React.ReactNode;
}

const HeaderContainer = styled.header<{ image?: string; height?: string }>`
    background: linear-gradient(rgba(36, 20, 38, 0.5), rgba(36, 39, 38, 0.5)), url(${(props) => props.image}) no-repeat center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: ${(props) => props.height};
`;

const HeaderContent = styled.div`
    text-align: center;
`;

const Title = styled.h2`
    color: #fff;
    font-size: 2.5rem;
    margin-top: 5rem;
    margin-bottom: 2rem;
`;

const Headline = styled.p`
    color: #fff;
    margin: 0 auto;
    margin-bottom: 4rem;
    max-width: 800px;
`;

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const { children, height, image, headline, title } = props;

    return (
        <HeaderContainer image={image} height={height}>
            <Container>
                <Row>
                    <Col>
                        <HeaderContent>
                            <Title>{title}</Title>
                            <Headline>{headline}</Headline>
                            {children}
                        </HeaderContent>
                    </Col>
                </Row>
            </Container>
        </HeaderContainer>
    );
};

Header.defaultProps = {
    height: '100%',
    image: 'https://entrematesyotrasyerbas.com.uy/img/mate-bg-desktop.jpg'
};

export default Header;
