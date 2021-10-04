import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// Contact page
const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ height: "400px" }} className="container d-flex align-items-center justify-content-center  my-5 bg-info">
                <div>
                    <h1>LET'S STAY IN TOUCH</h1>
                    <p>Get updates on sales, new courses and more</p>
                    <input type="text" className="form-control mb-3" placeholder="Your Email"></input>
                    <Link to="/Home" className="btn btn-danger">Submit</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;