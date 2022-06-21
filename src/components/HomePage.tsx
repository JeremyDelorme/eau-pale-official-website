import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import '../styles/HomePage.css';

export interface IHomePageProps { }

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
    return (
        <div>
            <Container fluid className='home-container'>
                <Row id='home-main-img' className='home-row'>
                    <Col lg={12}>
                        <Card className='home-card'>
                            <Card.Img src="../public/starter_files/img/chilling_2.png/100px180" />
                            <Card.Body className='home-card-body'>
                                <Card.Title className='home-card-title'>
                                    LATEST EP
                                </Card.Title>
                                <Card.Text>
                                    <p>
                                        BEACH
                                    </p>
                                </Card.Text>

                                <Button href="#" className='badge badge-primary'>Listen now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>


    );
};

export default HomePage;
