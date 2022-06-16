import React from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export interface IMusicPageProps { }

const MusicPage: React.FunctionComponent<IMusicPageProps> = props => {
    return <div>
        <h1>MUSIC</h1>
        <Container fluid className='music-container'>
            <Row className='music-row'>
                <Col lg={6} md={12} sm={12}>
                    <Card className='music-card' id='music-card1'></Card>
                    <h2 className='music-card-title'>les danses sales</h2>
                    <Button href="#" className='music-button'>Listen now</Button>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <Card className='music-card' id='music-card2'></Card>
                    <h2 className='music-card-title'>toute la peine</h2>
                    <Button href="#" className='music-button'>Listen now</Button>
                </Col>
                <hr />
                <Col lg={6} md={12} sm={12}>
                    <Card className='music-card' id='music-card3'></Card>
                    <h2 className='music-card-title'>beach</h2>
                    <Button href="#" className='music-button'>Listen now</Button>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <Card className='music-card' id='music-card4'></Card>
                    <h2 className='music-card-title'>cocteaux</h2>
                    <Button href="#" className='music-button'>Listen now</Button>
                </Col>
            </Row>

        </Container>
    </div>;
};
export default MusicPage;
