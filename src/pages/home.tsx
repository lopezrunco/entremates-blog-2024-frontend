import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import config from '../config/config';
import logging from '../config/logging';
import IPageProps from '../interfaces/page';
import IBlog from '../interfaces/blog';
import IUser from '../interfaces/user';

import Navigation from '../components/Navigation';
import ImageSlider from '../components/ImageSlider';
import LoadingComponent from '../components/Loader';
import BlogPreview from '../components/BlogPreview';
import ErrorText from '../components/ErrorText';
import ContentWarning from '../components/ContentWarning';
import NewMagazine from '../components/NewMagazine';
import SectionTitle from '../components/SectionTitle';
import Ads from '../components/Ads';

const HomePage: React.FunctionComponent<IPageProps> = (props) => {
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        GetAllBlogs();
    }, []);

    const GetAllBlogs = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: `${config.server.url}/blogs`
            });
            if (response.status === 200 || response.status === 304) {
                let blogs = response.data.blogs as IBlog[];
                blogs.sort((x, y) => y.updatedAt.localeCompare(x.updatedAt));
                setBlogs(blogs);
            }
        } catch (error) {
            logging.error(error);
            setError('Error fetching the blogs');
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    if (loading) {
        return <LoadingComponent>Cargando artículos...</LoadingComponent>;
    }

    return (
        <Container fluid className="p-0">
            <Navigation />
            <ImageSlider />
            <ContentWarning />
            <NewMagazine />
            <section className="light-img-bg">
                <Container className="mt-5">
                    <SectionTitle title="Novedades" />
                    <Row>

                    {blogs.length === 0 && (
                        <p>
                            A+un no hay artículos en el blog.
                            <br />
                            <Link to="/edit">Crear</Link> un nuevo árticulo
                        </p>
                    )}
                    {blogs.map((blog, index) => {
                        return (
                            <Col key={index} lg='4'>
                                <BlogPreview _id={blog._id} author={(blog.author as IUser).name} headline={blog.headline} title={blog.title} createdAt={blog.createdAt} updatedAt={blog.updatedAt} />
                            </Col>
                        );
                    })}
                    <ErrorText error={error} />
                    </Row>
                </Container>
            </section>
            <Ads />
        </Container>
    );
};

export default HomePage;
