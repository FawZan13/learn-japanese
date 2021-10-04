import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Header section
const Header = () => {
    return (
        <div className="mb-5">
            <Navbar className="py-4" bg="danger" variant="dark">
                <Container>
                    <Navbar.Brand href="/home"><img className="me-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcP2lD4WQdnhULK9LUPEV4LaAvoH9_rU9hjpohjQX4ojKLfyAxraqbz0jfa10JIAJwP9Y&usqp=CAU" height="40px" alt=""></img>Learn Japanese</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link><Link className="mx-4 text-decoration-none text-white" to="/Home">Home</Link></Nav.Link>
                        <Nav.Link><Link className="mx-4 text-decoration-none text-white" to="/Services">Services</Link></Nav.Link>
                        <Nav.Link><Link className="mx-4 text-decoration-none text-white" to="/About">About</Link></Nav.Link>
                        <Nav.Link><Link className="mx-4 text-decoration-none text-white" to="/Contact">Contact Us</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;