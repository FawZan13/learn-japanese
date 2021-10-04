import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Show = (props) => {
    const { name, price, img } = props.service;
    return (
        <Col className="">
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Show;