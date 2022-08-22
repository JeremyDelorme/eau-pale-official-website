import React, { FC } from 'react';

import { Card, Container, Row, Col, Button } from 'react-bootstrap';

import ModalFooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';

import '../styles/ShowsPage.css';

const ShowsPage: FC = () => {
    return (
        <div className='shows-div' >
            <NavbarComponent />
            <Container className='shows-container'>
                <h1>SHOWS</h1>
                <div className='shows-img'>
                    < hr
                        style={{
                            background: 'white',
                            color: 'white',
                            borderColor: 'white',
                            height: '3px',
                            opacity: '100%'
                        }}
                    />
                    <Row className='shows-row'>
                        <Col lg={8}>
                            <Card className='shows-card' >
                                <Card.Body className='shows-card-body'>
                                    <Card.Title className='shows-card-title'>
                                        CASA DEL POPOLO
                                    </Card.Title>
                                    <Card.Text className='shows-card-text'>
                                        <p>
                                            23 juillet 2022
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Button className='shows-buttons' href="#">
                                Buy Tickets
                            </Button>
                        </Col>
                    </Row>
                    < hr
                        style={{
                            background: 'white',
                            color: 'white',
                            borderColor: 'white',
                            height: '3px',
                            opacity: '100%'
                        }}
                    />
                    <Row className='shows-row'>
                        <Col lg={8}>
                            <Card className='shows-card' >
                                <Card.Body className='shows-card-body'>
                                    <Card.Title className='shows-card-title'>
                                        RITZ BAR
                                    </Card.Title>
                                    <Card.Text className='shows-card-text'>
                                        <p>
                                            23 août 2022
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Button className='shows-buttons' href="#">
                                Buy Tickets
                            </Button>
                        </Col>
                    </Row>
                    < hr
                        style={{
                            background: 'white',
                            color: 'white',
                            borderColor: 'white',
                            height: '3px',
                            opacity: '100%'
                        }}
                    />
                    <Row className='shows-row'>
                        <Col lg={8}>
                            <Card className='shows-card' >
                                <Card.Body className='shows-card-body'>
                                    <Card.Title className='shows-card-title'>
                                        CASA DEL POPOLO
                                    </Card.Title>
                                    <Card.Text className='shows-card-text'>
                                        <p>
                                            23 juillet 2022
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Button className='shows-buttons' href="#">
                                Buy Tickets
                            </Button>
                        </Col>
                    </Row>
                    < hr
                        style={{
                            background: 'white',
                            color: 'white',
                            borderColor: 'white',
                            height: '3px',
                            opacity: '100%'
                        }}
                    />
                    <Row className='shows-row'>
                        <Col lg={8}>
                            <Card className='shows-card' >
                                <Card.Body className='shows-card-body'>
                                    <Card.Title className='shows-card-title'>
                                        CASA DEL POPOLO
                                    </Card.Title>
                                    <Card.Text className='shows-card-text'>
                                        <p>
                                            23 juillet 2022
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Button className='shows-buttons' href="#">
                                Buy Tickets
                            </Button>
                        </Col>
                    </Row>
                    < hr
                        style={{
                            background: 'white',
                            color: 'white',
                            borderColor: 'white',
                            height: '3px',
                            opacity: '100%'
                        }}
                    />
                    <Row className='shows-row'>
                        <Col lg={8}>
                            <Card className='shows-card' >
                                <Card.Body className='shows-card-body'>
                                    <Card.Title className='shows-card-title'>
                                        CASA DEL POPOLO
                                    </Card.Title>
                                    <Card.Text className='shows-card-text'>
                                        <p>
                                            23 juillet 2022
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Button className='shows-buttons' href="#">
                                Buy Tickets
                            </Button>
                        </Col>
                    </Row>
                    < hr
                        style={{
                            background: 'white',
                            color: 'white',
                            borderColor: 'white',
                            height: '3px',
                            opacity: '100%'
                        }}
                    />
                    <Row className='shows-row'>
                        <Col lg={8}>
                            <Card className='shows-card' >
                                <Card.Body className='shows-card-body'>
                                    <Card.Title className='shows-card-title'>
                                        CASA DEL POPOLO
                                    </Card.Title>
                                    <Card.Text className='shows-card-text'>
                                        <p>
                                            23 juillet 2022
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Button className='shows-buttons' href="#">
                                Buy Tickets
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Container >
            <ModalFooterComponent />
        </div>

    );
};

export default ShowsPage;
