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
                        <Card className='home-follow-card'>
                            <Card.Title className='home-follow-card-title'>JOIN THE MAILING LIST</Card.Title>
                            <Form className='home-follow-form'>
                                <Form.Group className='home-formGroup'>
                                    <Form.Label className='home-form-label'>Email</Form.Label>
                                    <Form.Control
                                        className='home-form-control'
                                        type="text"
                                        placeholder="Simply enter your email address"
                                    />
                                    <Button className='home-submit-button'>
                                        SUBMIT
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <ModalFooterComponent />
        </div>

    );
};

export default HomePage;
