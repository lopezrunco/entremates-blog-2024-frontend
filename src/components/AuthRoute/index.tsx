import { Redirect } from 'react-router-dom';
import React, { useContext } from 'react';

import UserContext from '../../contexts/user';
import logging from '../../config/logging';

export interface IAuthRouteProps {
    children?: any
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props;
    const { user } = useContext(UserContext).userState;

    // If the user is not authenticated redirect to the login page
    if (user._id === '') {
        logging.info('Unauthorized, redirecting to login page...');
        return <Redirect to="/login" />;
    } else {
        return <>{children}</>;
    }
};

export default AuthRoute;
