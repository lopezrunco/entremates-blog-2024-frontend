import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import React, { useReducer, useState, useEffect } from 'react';

import logging from './utils/logging';
import routes from './config/routes';
import { UserContextProvider, initialUserState, userReducer } from './contexts/user';
import { Validate } from './modules/auth';

import LoadingComponent from './components/Loader';
import AuthRoute from './components/AuthRoute';

import GlobalStyles, { emyoyTheme } from './assets/styles/GlobalStyles';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    const [userState, userDispatch] = useReducer(userReducer, initialUserState);
    const [loading, setLoading] = useState<boolean>(true);
    const [authStage, setAuthStage] = useState<string>('Chequeando credenciales...');

    useEffect(() => {
        setTimeout(() => {
            CheckLocalStorageForCredentials();
        }, 1000);
    }, []);

    const CheckLocalStorageForCredentials = () => {
        setAuthStage('Chequeando credenciales...');
        const fire_token = localStorage.getItem('fire_token'); // Check local storage for a token.

        // If there is no token, we are logged out initially.
        if (fire_token === null) {
            userDispatch({ type: 'logout', payload: initialUserState });
            setAuthStage('No se encontró un usuario administrador.');
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } else {
            // If the token exsits, verify it in the backend.
            return Validate(fire_token, (error, user) => {
                if (error) {
                    logging.error(error);
                    setAuthStage('Usuario no válido, cerrando sesión...');
                    userDispatch({
                        type: 'logout',
                        payload: initialUserState
                    });
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                } else if (user) {
                    setAuthStage('User identificado.');
                    userDispatch({
                        type: 'login',
                        payload: { user, fire_token }
                    });
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                }
            });
        }
    };

    // This object will provide values to the userContext: the actual user state & the function to modify it.
    const userContextValues = {
        userState,
        userDispatch
    };

    loading && <LoadingComponent>{authStage}</LoadingComponent>;

    return (
        <UserContextProvider value={userContextValues}>
            <ThemeProvider theme={emyoyTheme}>
                <GlobalStyles />
                <Routes>
                    {/* Generate the routes dynamically. */}
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                route.auth ? (
                                    <AuthRoute>
                                        <route.component />
                                    </AuthRoute>
                                ) : (
                                    <route.component />
                                )
                            }
                        />
                    ))}
                </Routes>
            </ThemeProvider>
        </UserContextProvider>
    );
};

export default Application;
