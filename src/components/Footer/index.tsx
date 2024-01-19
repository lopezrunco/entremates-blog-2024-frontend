import { Container } from 'reactstrap';

function Footer() {
    return (
        <footer>
            <Container>
                <div className="flex">
                    <small>© {new Date().getFullYear()} Entre mates y otras yerbas</small>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
