import React, { FC } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

import '../styles/HomePage.css';
import '../styles/Contact.css';
import ModalFooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';

import CoverBeach from '../assets/img/beach.png';

const HomePage: FC = () => {
    return (
        <div className='home-div' >
            <NavbarComponent />
            <Container fluid className='home-container'>
                <Row className='home-row'>
                    <img id='home-main-img' src={CoverBeach} />
                    <Col lg={12}>
                        <Card className='home-card'>
                            <Card.Body className='home-card-body'>
                                <Card.Title className='home-card-title'>
                                    LATEST EP
                                </Card.Title>
                                <Card.Text>
                                    <p>
                                        BEACH
                                    </p>
                                </Card.Text>
                                <Button href="#" className='home-button btn-lg'>Listen now</Button>
                            </Card.Body>
                        </Card>
                        <Row className='home-form-row' >
                            <Card className='home-follow-card'>
                                <Card.Title className='home-follow-card-title'>JOIN THE MAILING LIST</Card.Title>
                                <Form className='home-follow-form'>
                                    <Form.Group className='home-formGroup'>
                                        <Form.Label className='home-form-label'>Email</Form.Label>
                                        <div className='home-form-div' >
                                            <Form.Control
                                                className='home-form-control'
                                                type="text"
                                                placeholder="Enter your email address for free goodies"
                                            />
                                            <Button className='home-button'>
                                                SUBMIT
                                            </Button>
                                        </div>

                                    </Form.Group>
                                </Form>
                            </Card>
                        </Row>

                    </Col>
                </Row>
            </Container>
            <ModalFooterComponent />
        </div>

    );
};

export default HomePage;
