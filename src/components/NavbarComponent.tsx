import React, { FC } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';

import '../styles/NavbarComponent.css';

const NavbarComponent: FC = () => {
    const { openCart, cartQuantity } = useShoppingCart();
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Navbar.Brand href="/eau-pale-official-website" >eau pâle</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" >
                    <Nav.Link href='/eau-pale-official-website/music'>Music</Nav.Link>
                    <Nav.Link href="/eau-pale-official-website/shows">Shows</Nav.Link>
                    <Nav.Link href="/eau-pale-official-website/shop">Shop</Nav.Link>
                    <Nav.Link href="/eau-pale-official-website/contact">Contact</Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button
                        onClick={openCart}
                        className='basket-button'>
                        <svg className='basket-svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="256" height="256" viewBox="0 0 256 256">

                            <defs>
                            </defs>
                            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                                <path d="M 20.936 31.857 H 1 c -0.552 0 -1 -0.448 -1 -1 c 0 -0.552 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.448 1 1 C 21.936 31.409 21.488 31.857 20.936 31.857 z" transform=" matrix(1 0 0 1 0 0) " />
                                <path d="M 21.972 40.095 H 2.037 c -0.552 0 -1 -0.448 -1 -1 c 0 -0.552 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.448 1 1 C 22.972 39.647 22.524 40.095 21.972 40.095 z" transform=" matrix(1 0 0 1 0 0) " />
                                <path d="M 23.228 48.333 H 3.292 c -0.552 0 -1 -0.447 -1 -1 c 0 -0.553 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.447 1 1 C 24.228 47.885 23.78 48.333 23.228 48.333 z" transform=" matrix(1 0 0 1 0 0) " />
                                <path d="M 81.552 58.405 H 38.974 c -0.557 0 -1.044 -0.377 -1.184 -0.916 L 28.683 22.42 c -0.341 -1.314 -1.527 -2.231 -2.885 -2.231 h -7.575 c -0.676 0 -1.223 -0.548 -1.223 -1.223 s 0.548 -1.223 1.223 -1.223 h 7.575 c 2.472 0 4.632 1.671 5.253 4.063 l 8.869 34.153 h 41.632 c 0.675 0 1.223 0.548 1.223 1.223 S 82.228 58.405 81.552 58.405 z" transform=" matrix(1 0 0 1 0 0) " />
                                <circle cx="46.342" cy="66.952" r="5.302" transform="  matrix(1 0 0 1 0 0) " />
                                <circle cx="73.09200000000001" cy="66.952" r="5.302" transform="  matrix(1 0 0 1 0 0) " />
                            </g>
                        </svg>
                        <div className='rounded-circle bg-danger d-flex-justifiy-content-center align-items-center'
                            style={{
                                color: 'white',
                                width: '1.5rem',
                                height: '1.5rem',
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                transform: 'translate(-60%, -125%)'
                            }}>
                            {cartQuantity}
                        </div>
                    </Button>
                )}

            </Navbar.Collapse>
        </Navbar >
    );
};

export default NavbarComponent;
