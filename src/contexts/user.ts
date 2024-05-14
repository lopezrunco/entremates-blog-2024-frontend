import { createContext } from 'react';
import IUser, { DEFAULT_FIRE_TOKEN, DEFAULT_USER } from '../interfaces/user';

// Define the structure of the user state.
export interface IUserState {
    user: IUser;
    fire_token: string;
}

// Define the structure of the user actions, that includes a payload of type IUserState.
export interface IUserActions {
    type: 'login' | 'logout';
    payload: IUserState;
}

// Initializes the state of the user and define a reducer function for managing state updates.
export const initialUserState: IUserState = {
    user: DEFAULT_USER,
    fire_token: DEFAULT_FIRE_TOKEN
};

export const userReducer = (state: IUserState, action: IUserActions) => {
    let user = action.payload.user;
    let fire_token = action.payload.fire_token;

    switch (action.type) {
        case 'login':
            localStorage.setItem('fire_token', fire_token);
            return { user, fire_token };
        case 'logout':
            localStorage.removeItem('fire_token');
            return initialUserState;
        default:
            return state;
    }
};

// Specify the shape of the context properties.
export interface IUserContextProps {
    userState: IUserState;
    userDispatch: React.Dispatch<IUserActions>;
}

// Create a IUserContextProps type context, with a default user state and an empty function to the user dispatch.
const UserContext = createContext<IUserContextProps>({
    userState: initialUserState,
    userDispatch: () => {}
});

// Create and export alias of the Consumer & Provider properties of the UserContext object.
export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;

export default UserContext;
