import axios from 'axios';
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useNavigate, Navigate, useParams, Link } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';

import config from '../config/config';
import UserContext from '../contexts/user';
import IPageProps from '../interfaces/page';
import IBlog from '../interfaces/blog';
import IUser from '../interfaces/user';

import LoadingComponent, { Loading } from '../components/Loader';
import Navigation from '../components/Navigation';
import ErrorText from '../components/ErrorText';
import Header from '../components/Header';

const BlogPage: React.FunctionComponent<IPageProps> = () => {
    const [_id, setId] = useState<string>('');
    const [blog, setBlog] = useState<IBlog | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const [modal, setModal] = useState<boolean>(false);
    const [deleting, setDeleting] = useState<boolean>(false);

    const { user } = useContext(UserContext).userState;
    const navigate = useNavigate();
    const { blogID } = useParams();

    useEffect(() => {
        if (blogID) {
            setId(blogID);
        } else {
            navigate('/');
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (_id !== '') getBlog();
        // eslint-disable-next-line
    }, [_id]);

    const getBlog = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: `${config.server.url}/blogs/read/${_id}`
            });

            if (response.status === 200 || response.status === 304) {
                setBlog(response.data.blog);
            } else {
                setError(`Unable to fetch the blog ${_id}`);
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteBlog = async () => {
        setDeleting(true);

        try {
            const response = await axios({
                method: 'DELETE',
                url: `${config.server.url}/blogs/${_id}`
            });

            if (response.status === 200) {
                navigate('/');
            } else {
                setError(`Unable to delete the blog ${_id}`);
                setDeleting(false);
            }
        } catch (error: any) {
            setError(error.message);
            setDeleting(false);
        }
    };

    if (loading) return <LoadingComponent>Loading blog...</LoadingComponent>;

    if (blog) {
        return (
            <Container fluid className="p-0">
                <Navigation />
                <Modal isOpen={modal}>
                    <ModalHeader>Delete</ModalHeader>
                    <ModalBody>
                        {deleting ? <Loading /> : 'Delete this blog?'}
                        <ErrorText error={error} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => deleteBlog()}>
                            Delete permanently
                        </Button>
                        <Button color="secondary" onClick={() => setModal(false)}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
                <Header image={blog.picture || undefined} headline={blog.headline} title={blog.title}>
                    <p className="text-white">
                        Posted by {(blog.author as IUser).name} on {new Date(blog.createdAt).toLocaleString()}
                    </p>
                </Header>
                <Container className="mt-5">
                    {user._id === (blog.author as IUser)._id && (
                        <Container fluid className="p-0">
                            <Button color="info" className="mr-2" tag={Link} to={`/edit/${blog._id}`}>
                                Edit
                            </Button>
                            <Button color="danger" onClick={() => setModal(true)}>
                                Delete
                            </Button>
                        </Container>
                    )}
                    <ErrorText error={error} />
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </Container>
            </Container>
        );
    } else {
        return <Navigate to="/" />;
    }
};

export default BlogPage;
