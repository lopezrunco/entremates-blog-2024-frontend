// This file is responsible of integrate Firebase into the client side application.

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from '../config/config';

// Creates a Firebase app instance using the provided config object.
const Firebase = firebase.initializeApp(config.firebase);

// Export Google authentication provider.
export const Providers = {
    google: new firebase.auth.GoogleAuthProvider()
};

// Export the Firebase services for authentication and the initialized Firebase app.
export const auth = firebase.auth();
export default Firebase;
