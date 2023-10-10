import { Container } from 'reactstrap';

import IPageProps from '../interfaces/page';

import Navigation from '../components/Navigation';
import Header from '../components/Header';

const HomePage: React.FunctionComponent<IPageProps> = (props) => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="Entre mates y otras yerbas" headline="Fe - Esperanza - Caridad" />
            <Container className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Container>
        </Container>
    );
};

export default HomePage;
