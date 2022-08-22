import React, { FC } from 'react';
import { Card, ModalFooter, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaSpotify } from 'react-icons/fa';


import '../styles/FooterComponent.css';

const ModalFooterComponent: FC = () => {
    return (
        <ModalFooter className='modal-footer'>
            <Row className='modalFooter-row'>
                <Col className='modalFooter-col'>
                    <Card className='modalFooter-card'>
                        <p>@bebeeclaterecords</p>
                    </Card>
                </Col>
                <Col className='modalFooter-col'>
                    <Card className='modalFooter-card'>
                        <Link to={'https://www.instagram.com/eau_pale_music/'} >
                            <FaInstagram />
                        </Link>
                    </Card>
                </Col>
                <Col className='modalFooter-col'>
                    <Card className='modalFooter-card'>
                        <Link to={'https://www.facebook.com/eaupalemusicrainbow'} >
                            <FaFacebook />
                        </Link>
                    </Card>
                </Col>
                <Col className='modalFooter-col'>
                    <Card className='modalFooter-card'>
                        <Link to={'https://open.spotify.com/artist/5kGvcS4JETjLY0oGijSEr9?si=huN_cr8lR0O9lGa8bHgjsg'} >
                            <FaSpotify />
                        </Link>
                    </Card>
                </Col>
            </Row>
        </ModalFooter >
    );
};


export default ModalFooterComponent;
