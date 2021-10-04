import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Show from '../Show/Show';
// services page
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <h2 className="text-center my-5">Services</h2>
            <Row xs={1} md={4} className="g-4 mx-auto">
                {
                    services.map(service => <Show key={service.key} service={service}></Show>
                    )}
            </Row>
            <Footer></Footer>

        </div>
    );
};

export default Services;