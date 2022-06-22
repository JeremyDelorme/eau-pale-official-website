import React from 'react';
import { Card, ModalFooter, Row, Col } from 'react-bootstrap';

import '../styles/FooterComponent.css';

export interface IModalFooterComponentProps { }


const ModalFooterComponent: React.FunctionComponent<IModalFooterComponentProps> = props => {
    return (
        <ModalFooter className='modal-footer'>
            <Row className='modalFooter-row'>
                <Col lg={4} className='modalFooter-col'>
                    <Card className='modalFooter-card'>
                        <p>@bebeeclaterecords</p>
                    </Card>
                </Col>
                <Col lg={4} className='modalFooter-col'>
                    <Card className='modalFooter-card'>
                        <p>@bebeeclaterecords</p>
                    </Card>
                </Col>
                <Col lg={4} className='modalFooter-col'>
                    <Card className='modalFooter-card'>
                        <p>@bebeeclaterecords</p>
                    </Card>
                </Col>
            </Row>

        </ModalFooter >
    );
};


export default ModalFooterComponent;
