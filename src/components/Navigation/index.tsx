import { Navbar, Container, Nav, NavbarText, Button, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';

import { mainRoutes } from '../../config/routes';
import UserContext, { initialUserState } from '../../contexts/user';

export interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = (props) => {
    const userContext = useContext(UserContext);
    const { user } = userContext.userState;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const logout = () => {
        if (user && user._id) {
            userContext.userDispatch({
                type: 'logout',
                payload: initialUserState
            });
        }
    };

    return (
        <Navbar color="light" light sticky="top" expand="md">
            <Container>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {mainRoutes.map((route, i) => (
                            <NavItem key={i}>
                                <NavLink tag={Link} to={route.path}>
                                    {route.name}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>

                    {!user._id ? (
                        <NavbarText tag={Link} to="/login">
                            <FaUser />
                        </NavbarText>
                    ) : (
                        <React.Fragment>
                            <Button outline size="sm" tag={Link} to="/edit">
                                Crear artículo
                            </Button>
                            <NavbarText className="mr-2 ml-2"> </NavbarText>
                            <Button outline size="sm" onClick={() => logout()}>
                                Cerrar sesión
                            </Button>
                        </React.Fragment>
                    )}
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
