import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

import '../styles/StoreItems.scss';
import '../styles/HomePage.scss';

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart();
    const quantity = getItemQuantity(id);

    return (
        <Card className="h-100 m-3 m-3" >
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: 'cover' }}
            />
            <Card.Body className='store-card-body' >
                <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="store-div">
                    {quantity ===
                        0
                        ? (

                            <Button className="add-to-cart-button" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
                        )
                        : (
                            <div
                                className="d-flex align-items-center flex-column"
                                style={{ gap: '.5rem' }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{ gap: '.5rem' }}
                                >
                                    <Button className='store-buttons' onClick={() => decreaseCartQuantity(id)} >-</Button>
                                    <div>
                                        <span className="fs-3">{quantity}</span> in cart
                                    </div>
                                    <Button className='store-buttons' onClick={() => increaseCartQuantity(id)}>+</Button>
                                </div>
                                <Button
                                    className='store-remove-button'
                                    onClick={() => removeFromCart(id)}
                                    size="sm"
                                >Remove</Button>
                            </div>
                        )}
                </div>
            </Card.Body>
        </Card>
    );
}
