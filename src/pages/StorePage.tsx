import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItems';

import ModalFooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';

import storeItems from '../data/items.json';
import '../styles/StoreItems.css';

const StorePage: FC = () => {
    return (
        <div className='store-div' >
            <NavbarComponent />
            <Container className='store-container'>
                <h1>Store</h1>
                <Row md={2} xs={1} lg={3} className="">
                    {storeItems.map(item => (
                        <Col className='shop-card-col' key={item.id}>
                            <StoreItem {...item} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <ModalFooterComponent />
        </div>

    );
};

export default StorePage;
