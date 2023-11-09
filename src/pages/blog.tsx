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
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import { FaEdit, FaTrash } from 'react-icons/fa';

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
                setError(`No se pudo cargar el artículo con ID: ${_id}`);
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
                setError(`No se puedo borrar el artículo con ID ${_id}`);
                setDeleting(false);
            }
        } catch (error: any) {
            setError(error.message);
            setDeleting(false);
        }
    };

    if (loading) return <LoadingComponent>Cargando artículo...</LoadingComponent>;

    if (blog) {
        return (
            <Container fluid className="p-0">
                <Navigation />
                <Modal isOpen={modal}>
                    <ModalBody>
                        {deleting ? <Loading /> : '¿Borrar este artículo?'}
                        <ErrorText error={error} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" className="mr-2" onClick={() => deleteBlog()}>
                            Borrar
                        </Button>
                        <Button color="secondary" onClick={() => setModal(false)}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
                <Header image={blog.picture || undefined} headline={blog.headline} title={blog.title}>
                    <span className="tag">
                        Publicado por {(blog.author as IUser).name} el {new Date(blog.createdAt).toLocaleString()}
                    </span>
                </Header>
                <section className="news light-img-bg">
                    <Container>
                        {user._id === (blog.author as IUser)._id && (
                            <Container fluid className="pb-5 d-flex justify-content-end">
                                <Button color="info" className="mr-2" tag={Link} to={`/edit/${blog._id}`}>
                                    <FaEdit className="mr-2" /> Editar
                                </Button>
                                <Button color="danger" onClick={() => setModal(true)}>
                                    <FaTrash className="mr-2" /> Borrar
                                </Button>
                            </Container>
                        )}
                        <ErrorText error={error} />
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </Container>
                </section>
                <Bottom />
                <Footer />
            </Container>
        );
    } else {
        return <Navigate to="/" />;
    }
};

export default BlogPage;
