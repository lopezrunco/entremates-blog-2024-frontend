// import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';
import firebase from 'firebase';
import React, { useContext, useState } from 'react';

import UserContext from '../contexts/user';
import { SignInWithSocialMedia as SocialMediaPopup } from '../modules/auth';
import logging from '../config/logging';

import IPageProps from '../interfaces/page';
import CenterPiece from '../components/CenterPiece';
import ErrorText from '../components/ErrorText';
import { Providers } from '../config/firebase';
import LoadingComponent from '../components/Loader';

const LoginPage: React.FunctionComponent<IPageProps> = (props) => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const userContext = useContext(UserContext);
    // const history = useHistory();
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
                            // TO DO: If a token exists, auth with the backend
                        } catch (error) {
                            setError('Invalid token.');
                            logging.error(error);
                            setAuthenticating(false);
                        }
                    } else {
                        // If no name is returned, we need a custom form getting user's name depending of the provider.
                        setError('The identity provider does not have a name.');
                        setAuthenticating(false);
                    }
                } else {
                    setError('The identity provider is missing a lot of necessary information. Try another account or provider.');
                    setAuthenticating(false);
                }
            })
            .catch((error) => {
                setError(error.message);
                setAuthenticating(false);
            });
    };

    return (
        <CenterPiece>
            <Card>
                <CardHeader>{isLogin ? 'Login' : 'Sign Up'}</CardHeader>
                <CardBody>
                    <ErrorText error={error} />
                    <Button block disabled={authenticating} onClick={() => SignInWithSocialMedia(Providers.google)} style={{ backgroundColor: '#ea4335', borderColor: '#ea4335' }}>
                        <i className="fab fa-google mr-2"></i> Sign {isLogin ? 'in' : 'up'} with Google
                    </Button>
                    {authenticating && <LoadingComponent card={false} />}
                </CardBody>
            </Card>
        </CenterPiece>
    );
};

export default LoginPage;
