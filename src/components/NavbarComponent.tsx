import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import '../styles/NavbarComponent.css';

export interface INavbarComponentProps { }


const NavbarComponent: React.FunctionComponent<INavbarComponentProps> = props => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/" >eau pâle</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" >
                    <Nav.Link href='/music'>Music</Nav.Link>
                    <Nav.Link href="/shows">Shows</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default NavbarComponent;
