import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav, NavbarText, Button, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

import UserContext, { initialUserState } from '../../contexts/user';

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
    const userContext = useContext(UserContext);
    const { user } = userContext.userState;
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const Logout = () => {
        userContext.userDispatch({
            type: 'logout',
            payload: initialUserState
        });
    };

    return (
        <Navbar color="light" light sticky="top" expand="md">
            <Container>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">
                                Inicio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/revista">
                                Revista
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/novedades">
                                Novedades
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/contacto">
                                Contacto
                            </NavLink>
                        </NavItem>
                    </Nav>

                    {user._id === '' ? (
                        <NavbarText tag={Link} to="/login">
                            Administración
                        </NavbarText>
                    ) : (
                        <>
                            <Button outline size="sm" tag={Link} to="/edit">
                                Crear artículo
                            </Button>
                            <NavbarText className="mr-2 ml-2"> </NavbarText>
                            <Button outline size="sm" onClick={() => Logout()}>
                                Cerrar sesión
                            </Button>
                        </>
                    )}
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
