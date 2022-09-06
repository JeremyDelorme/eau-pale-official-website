import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardGroup, Form, Button } from 'react-bootstrap';

import '../styles/Contact.css';

import ModalFooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';


const ContactPage: FC = () => {
    return (
        <div className='contact-div' >
            <NavbarComponent />
            <Container fluid className='contact-container'>
                <Row className='contact-row'>
                    <Col className='contact-col'>
                        <CardGroup className='contact-cardGroup'>
                            <Card className='contact-card'>
                                <Card.Title className='contact-card-title'>JOIN THE MAILING LIST</Card.Title>
                                <Form className='contact-form'>
                                    <Form.Group className='contact-form-group'>
                                        <Form.Label className='contact-form-label'>Email</Form.Label>
                                        <Form.Control
                                            className='contact-form-control'
                                            type="text"
                                            placeholder="Enter a username"
                                        />
                                        <Button className='contact-submit-button'>
                                            Sign up for free goodies
                                        </Button>
                                    </Form.Group>
                                    <h5>Booking & Managment</h5>
                                    <Link to={'#'} className='contact-email'>
                                        eaupalesolo@gmail.com
                                    </Link>
                                </Form>
                            </Card>
                        </CardGroup>

                    </Col>
                </Row>
            </Container>
            <ModalFooterComponent />
        </div>
    );
};

export default ContactPage;
