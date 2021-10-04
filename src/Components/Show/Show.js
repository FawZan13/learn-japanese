import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Show = (props) => {
    const { name, price, img } = props.service;
    return (
        <Col className="my-5 text-center text-white">
            <Card border="primary" className="bg-danger" style={{ width: '18rem' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Show;