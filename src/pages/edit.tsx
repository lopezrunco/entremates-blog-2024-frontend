import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useContext, useEffect, useState } from 'react';

import UserContext from '../contexts/user';
import config from '../config/config';
import logging from '../config/logging';
import IPageProps from '../interfaces/page';
import IBlog from '../interfaces/blog';

import LoadingComponent from '../components/Loader';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import ErrorText from '../components/ErrorText';
import SuccessText from '../components/SuccessText';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';

const EditPage: React.FunctionComponent<IPageProps> = () => {
    const [_id, setId] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [picture, setPicture] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [headline, setHeadline] = useState<string>('');
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    const [saving, setSaving] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [success, setSuccess] = useState<string>('');
    const [error, setError] = useState<string>('');

    const { user } = useContext(UserContext).userState;
    const { blogID } = useParams();

    useEffect(() => {
        if (blogID) {
            setId(blogID);
            getBlog(blogID);
        } else {
            setLoading(false);
        }
    }, [blogID]);

    const getBlog = async (id: string) => {
        try {
            const response = await axios({
                method: 'GET',
                url: `${config.server.url}/blogs/read/${id}`
            });

            if (response.status === 200 || response.status === 304) {
                if (user._id !== response.data.blog.author._id) {
                    logging.warn('El propietario de este artículo es otro usuario.');
                    setId('');
                } else {
                    let blog = response.data.blog as IBlog;

                    setTitle(blog.title);
                    setContent(blog.content);
                    setHeadline(blog.headline);
                    setPicture(blog.picture || '');

                    // Convert html string to DraftJS editor state
                    const contentBlock = htmlToDraft(blog.content);
                    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                    const _editorState = EditorState.createWithContent(contentState);
                    setEditorState(_editorState);
                }
            } else {
                setError(`No se pudo cargar el artículo con ID ${_id}`);
                setId('');
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const createBlog = async () => {
        if (title === '' || headline === '' || content === '') {
            setError('Por favor, llene todos los campos requeridos.');
            setSuccess('');
            return null;
        }
        setError('');
        setSuccess('');
        setSaving(true);

        try {
            const response = await axios({
                method: 'POST',
                url: `${config.server.url}/blogs/create`,
                data: {
                    title,
                    picture,
                    headline,
                    content,
                    author: user._id
                }
            });
            if (response.status === 201) {
                setId(response.data.blog._id);
                setSuccess('Artículo creado. Puede continuar editándolo en esta misma página.');
            } else {
                setError('Error al guardar el artículo.');
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setSaving(false);
        }
    };

    const editBlog = async () => {
        if (title === '' || headline === '' || content === '') {
            setError('Por favor, llene todos los campos requeridos.');
            setSuccess('');
            return null;
        }
        setError('');
        setSuccess('');
        setSaving(true);

        try {
            const response = await axios({
                method: 'PATCH',
                url: `${config.server.url}/blogs/update/${_id}`,
                data: {
                    title,
                    picture,
                    headline,
                    content,
                    author: user._id
                }
            });
            if (response.status === 201) {
                setSuccess('Artículo actualizado correctamente.');
            } else {
                setError('Error al actualizar el artículo.');
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <LoadingComponent>Loading blog editor...</LoadingComponent>;

    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header headline="" title={_id !== '' ? 'Editar artículo' : 'Crear artículo'} />
            <section className='light-img-bg'>
                <Container>
                    <ErrorText error={error} />
                    <Form>
                        <FormGroup>
                            <Label for="title">Título *</Label>
                            <Input type="text" name="title" value={title} id="title" placeholder="Título del artículo..." disabled={saving} onChange={(event) => setTitle(event.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="picture">URL de la imagen</Label>
                            <Input type="text" name="picture" value={picture} id="picture" placeholder="URL de la imagen..." disabled={saving} onChange={(event) => setPicture(event.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="headline">Subtítulo *</Label>
                            <Input
                                type="text"
                                name="headline"
                                value={headline}
                                id="headline"
                                placeholder="Subtítulo del artículo..."
                                disabled={saving}
                                onChange={(event) => setHeadline(event.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Contenido</Label>
                            <Editor
                                editorState={editorState}
                                wrapperClassName="card"
                                editorClassName="card-body"
                                onEditorStateChange={(newState) => {
                                    setEditorState(newState);
                                    setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
                                }}
                                toolbar={{
                                    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history', 'embedded', 'emoji', 'image'],
                                    inline: { inDropdown: true },
                                    list: { inDropdown: true },
                                    textAlign: { inDropdown: true },
                                    link: { inDropdown: true },
                                    history: { inDropdown: true }
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <SuccessText success={success} />
                        </FormGroup>
                        <FormGroup>
                            <Button
                                block
                                onClick={() => {
                                    _id !== '' ? editBlog() : createBlog();
                                }}
                                disabled={saving}
                            >
                                {_id !== '' ? 'Actualizar' : 'Crear'}
                            </Button>
                            {_id !== '' && (
                                <Button block color="success" tag={Link} to={`/blogs/${_id}`}>
                                    Ver artículo
                                </Button>
                            )}
                        </FormGroup>
                        <FormGroup>
                            <Label className="mt-5">Previsualización:</Label>
                            <div className="border p-2">
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                            </div>
                        </FormGroup>
                    </Form>
                </Container>
            </section>
            <Bottom />
            <Footer />
        </Container>
    );
};

export default EditPage;
