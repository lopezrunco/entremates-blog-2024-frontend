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
import ImageSlider from '../components/ImageSlider';
import LoadingComponent from '../components/Loader';
import BlogPreview from '../components/BlogPreview';
import ErrorText from '../components/ErrorText';

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
        return <LoadingComponent>Loading blog list...</LoadingComponent>;
    }

    return (
        <Container fluid className="p-0">
            <Navigation />
            <ImageSlider />
            <Container className="mt-5">
                {blogs.length === 0 && (
                    <p>
                        No blogs yet
                        <br />
                        <Link to="/edit">Create</Link> a new one
                    </p>
                )}
                {blogs.map((blog, index) => {
                    return (
                        <div key={index}>
                            <BlogPreview _id={blog._id} author={(blog.author as IUser).name} headline={blog.headline} title={blog.title} createdAt={blog.createdAt} updatedAt={blog.updatedAt} />
                            <hr />
                        </div>
                    );
                })}
                <ErrorText error={error} />
            </Container>
        </Container>
    );
};

export default HomePage;
