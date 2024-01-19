import axios from 'axios';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import config from '../config/config';
import logging from '../config/logging';
import IPageProps from '../interfaces/page';
import IBlog from '../interfaces/blog';
import IUser from '../interfaces/user';

import Navigation from '../components/Navigation';
import LoadingComponent from '../components/Loader';
import BlogPreview from '../components/BlogPreview';
import ErrorText from '../components/ErrorText';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const BlogListPage: React.FunctionComponent<IPageProps> = (props) => {
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
            <Header
                image="https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/si1ty8bnzm96rnmj2eg0"
                headline="Compartimos artículos acerca del uso, dosis, fórmulas y virtudes curativas de las hierbas medicinales."
                title="Novedades"
                height="300px"
            />
            <section className="news light-img-bg">
                <Container>
                    <div className="grid-2 grid">
                        {blogs.length === 0 && (
                            <p>
                                Aún no hay artículos en el blog.
                                <br />
                                <Link to="/edit">Crear</Link> un nuevo árticulo
                            </p>
                        )}
                        {blogs.map((blog, i) => {
                            return (
                                <BlogPreview
                                    key={i}
                                    _id={blog._id}
                                    author={(blog.author as IUser).name}
                                    headline={blog.headline}
                                    title={blog.title}
                                    picture={blog.picture}
                                    createdAt={blog.createdAt}
                                    updatedAt={blog.updatedAt}
                                />
                            );
                        })}
                        <ErrorText error={error} />
                    </div>
                </Container>
            </section>
            <Bottom />
            <Footer />
        </Container>
    );
};

export default BlogListPage;
