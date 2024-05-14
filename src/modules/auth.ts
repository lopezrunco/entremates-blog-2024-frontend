import firebase from 'firebase';
import axios from 'axios';

import { auth } from '../config/firebase';
import logging from '../utils/logging';
import config from '../config/config';
import IUser from '../interfaces/user';

// Authenticates the user using a firebase auth provider (Google, Facebook, etc).
export const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider) =>
    new Promise<firebase.auth.UserCredential>((resolve, reject) => {
        auth.signInWithPopup(provider)
            .then((result) => resolve(result))
            .catch((error) => reject(error));
    });

// Authenticates the user in the backend after the Firebase authentication.
export const Authenticate = async (uid: string, name: string, fire_token: string, callback: (error: string | null, user: IUser | null) => void) => { // "void" means that the function does not return any value
    try {
        const response = await axios({
            method: 'POST',
            url: `${config.server.url}/users/login`,
            data: {
                uid,
                name
            },
            headers: { Authorization: `Bearer ${fire_token}` }
        });
        if (response.status === 200 || response.status === 201 || response.status === 304) {
            logging.info('Successfuly authenticated.');
            callback(null, response.data.user);
        } else {
            logging.warn('Unable to authenticate');
            callback('Unable to authenticate', null);
        }
    } catch (error) {
        logging.error(error);
        callback('Unable to authenticate', null);
    }
};

// Validates the Firebase token in the backend to make sure the user still authenticated.
export const Validate = async (fire_token: string, callback: (error: string | null, user: IUser | null) => void) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${config.server.url}/users/validate`,
            headers: { Authorization: `Bearer ${fire_token}` }
        });
        if (response.status === 200 || response.status === 304) {
            logging.info('Successfuly validated.');
            callback(null, response.data.user);
        } else {
            logging.warn('Unable to validate');
            callback('Unable to validate', null);
        }
    } catch (error) {
        logging.error(error);
        callback('Unable to validate', null);
    }
};
