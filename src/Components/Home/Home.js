import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Show from '../Show/Show';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./home-services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>

            <h2 className="text-center my-5">Services</h2>
            <Row xs={1} md={4} className="g-4">
                {
                    services.map(service => <Show service={service}></Show>
                    )}
            </Row>

        </div>
    );
};

export default Home;