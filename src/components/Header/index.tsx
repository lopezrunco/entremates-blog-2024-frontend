import { Col, Container, Row } from 'reactstrap';
import React from 'react';

import { HeaderContainer } from './HeaderContainer';
import { HeaderContent } from './HeaderContent';
import { Title } from './Title';
import { Headline } from './Headline';

export interface IHeaderProps {
    height?: string;
    image?: string;
    title: string;
    headline: string;
    children?: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = (props) => {
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

// If a parent component uses the Header component without specifying 
// height and image values, the default ones will be used instead.
Header.defaultProps = {
    height: '100%',
    image: 'https://entrematesyotrasyerbas.com.uy/img/mate-bg-desktop.jpg'
};

export default Header;
