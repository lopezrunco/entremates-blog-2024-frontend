import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, NavbarBrand, Nav, NavbarText, Button } from 'reactstrap';
import UserContext, { initialUserState } from '../../contexts/user';

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
    const userContext = useContext(UserContext);
    const { user } = userContext.userState;

    const Logout = () => {
        userContext.userDispatch({
            type: 'logout',
            payload: initialUserState
        });
    };

    return (
        <Navbar color="light" light sticky="top" expand="md">
            <Container>
                <NavbarBrand tag={Link} to="/">
                    EMYOY
                </NavbarBrand>
                <Nav className="mr-auto" navbar />
                {user._id === '' ? (
                    <NavbarText tag={Link} to="/login">
                        Login
                    </NavbarText>
                ) : (
                    <>
                        <Button outline tag={Link} to="/edit">
                            Post a Blog
                        </Button>
                        <NavbarText className="mr-2 ml-2">\</NavbarText>
                        <Button outline size="sm" onClick={() => Logout()}>
                            Logout
                        </Button>
                    </>
                )}
            </Container>
        </Navbar>
    );
};

export default Navigation;
