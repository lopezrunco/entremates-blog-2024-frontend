import firebase from 'firebase';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';
import React, { useContext, useState } from 'react';

import { Providers } from '../config/firebase';
import logging from '../utils/logging';
import UserContext from '../contexts/user';
import { Authenticate, SignInWithSocialMedia as SocialMediaPopup } from '../modules/auth';

import IPageProps from '../interfaces/page';

import CenterElements from '../components/CenterElements';
import ErrorText from '../components/ErrorText';
import LoadingComponent from '../components/Loader';

const LoginPage: React.FunctionComponent<IPageProps> = (props) => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    const isLogin = window.location.pathname.includes('login');

    const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== '') setError('');
        setAuthenticating(true);

        SocialMediaPopup(provider)
            .then(async (result) => {
                logging.info(result);
                let user = result.user;

                if (user) {
                    let uid = user.uid;
                    let name = user.displayName;

                    if (name) {
                        try {
                            let fire_token = await user.getIdToken();
                            Authenticate(uid, name, fire_token, (error, _user) => {
                                if (error) {
                                    setError(error);
                                    setAuthenticating(false);
                                } else if (_user) {
                                    userContext.userDispatch({
                                        type: 'login',
                                        payload: { user: _user, fire_token }
                                    });
                                    navigate('/');
                                }
                            });
                        } catch (error) {
                            setError('Invalid token.');
                            logging.error(error);
                            setAuthenticating(false);
                        }
                    } else {
                        // If no name is returned, we need a custom form getting user's name depending of the provider.
                        setError('El proveedor de identidad no tiene un nombre.');
                        setAuthenticating(false);
                    }
                } else {
                    setError('El proveedor de identidad no entregó toda la información necesaria. Intente con otro proveedor.');
                    setAuthenticating(false);
                }
            })
            .catch((error) => {
                setError(error.message);
                setAuthenticating(false);
            });
    };

    return (
        <CenterElements>
            <Card>
                <CardHeader>{isLogin ? 'Iniciar sesión' : 'Registro'}</CardHeader>
                <CardBody>
                    <ErrorText error={error} />
                    <Button block disabled={authenticating} onClick={() => SignInWithSocialMedia(Providers.google)} style={{ backgroundColor: '#ea4335', borderColor: '#ea4335' }}>
                        <i className="fab fa-google mr-2"></i> Sign {isLogin ? 'in' : 'up'} with Google
                    </Button>
                    {authenticating && <LoadingComponent card={false} />}
                </CardBody>
            </Card>
        </CenterElements>
    );
};

export default LoginPage;
