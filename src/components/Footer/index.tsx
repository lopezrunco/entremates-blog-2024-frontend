import { Container } from 'reactstrap';
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Container>
                <div className="flex">
                    <small>© {currentYear} Entre mates y otras yerbas</small>
                    <small>
                        Desarrollo:{' '}
                        <a href="https://github.com/lopezrunco" target="_blank" rel="noreferrer">
                            LopezRunco
                        </a>
                    </small>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
