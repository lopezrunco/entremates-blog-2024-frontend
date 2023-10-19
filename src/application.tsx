import { Route, RouteChildrenProps, Switch } from 'react-router-dom';
import React, { useReducer, useState, useEffect } from 'react';

import logging from './config/logging';
import routes from './config/routes';
import { UserContextProvider, initialUserState, userReducer } from './contexts/user';
import { Validate } from './modules/auth';
import LoadingComponent from './components/Loader';
import AuthRoute from './components/AuthRoute';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    const [userState, userDispatch] = useReducer(userReducer, initialUserState);
    const [loading, setLoading] = useState<boolean>(true);
    const [authStage, setAuthStage] = useState<string>('Checking local storage...');

    useEffect(() => {
        setTimeout(() => {
            CheckLocalStorageForCredentials();
        }, 1000);
    }, []);

    // Check local storage for a token. If exists, verify with the backend. If not, we're logged out initially.
    const CheckLocalStorageForCredentials = () => {
        setAuthStage('Checking credentials...');
        const fire_token = localStorage.getItem('fire_token');

        if (fire_token === null) {
            userDispatch({ type: 'logout', payload: initialUserState });
            setAuthStage('No credentials found.');
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } else {
            return Validate(fire_token, (error, user) => {
                if (error) {
                    logging.error(error);
                    setAuthStage('User not valid, logging out...');
                    userDispatch({
                        type: 'logout',
                        payload: initialUserState
                    });
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                } else if (user) {
                    setAuthStage('User authenticated.')
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

    const userContextValues = {
        userState,
        userDispatch
    };

    if (loading) {
        return <LoadingComponent>{authStage}</LoadingComponent>;
    }

    return (
        <UserContextProvider value={userContextValues}>
            <Switch>
                {routes.map((route, index) => {
                    if (route.auth) {
                        // If there is an authentication, protect the route
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            render={(routeProps: RouteChildrenProps<any>) => (
                                <AuthRoute>
                                    <route.component {...routeProps} />
                                </AuthRoute>
                            )}
                        />;
                    }
                    return <Route key={index} exact={route.exact} path={route.path} render={(routeProps: RouteChildrenProps<any>) => <route.component {...routeProps} />} />;
                })}
            </Switch>
        </UserContextProvider>
    );
};

export default Application;
