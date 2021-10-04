import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Show from '../Show/Show';
// Home page
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <section className="my-5 d-flex">
                <div className="mx-5 w-50">
                    <h2>Learn Japansese</h2>
                    <h4 className="my-3 lh-lg fw-normal">Japanese is an East Asian language spoken by about 128 million people, primarily in Japan, where it is the national language. It is a member of the Japonic language family, and its ultimate derivation and relation to other languages is unclear. </h4>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEp2W37SIagLk8UKuO3hCQlSKiahcaj7p8Q&usqp=CAU" height="400px" alt=""></img>
                </div>
            </section>
            <section className="my-5">
                <h2 className="text-center my-5">Our Services</h2>
                <Row xs={1} md={4} className="g-4 mx-auto">
                    {
                        services.slice(0, 4).map(service => <Show key={service.key} service={service}></Show>
                        )}
                </Row>
            </section>
            <Footer></Footer>

        </div>
    );
};

export default Home;