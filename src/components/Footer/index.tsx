import { Container } from 'reactstrap';

function Footer() {
    return (
        <footer>
            <Container>
                <div className="flex">
                    <small>© {new Date().getFullYear()} Entre mates y otras yerbas</small>
                    <small>
                        Desarrollo:{' '}
                        <a href="https://damianlopez.com/" target="_blank" rel="noreferrer">
                            lopezrunco
                        </a>
                    </small>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
