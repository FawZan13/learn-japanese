import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar className="py-1" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Learn Japanese</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link className="mx-4" href="#home">Home</Nav.Link>
                        <Nav.Link className="mx-4" href="#features">Services</Nav.Link>
                        <Nav.Link className="mx-4" href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className="mx-4" href="#about">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;