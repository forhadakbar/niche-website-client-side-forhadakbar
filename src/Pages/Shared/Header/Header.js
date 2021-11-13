import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useAPI } from '../../../Context/apiContext';

const Header = () => {
    const { user, logOut } = useAPI();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/home"><h1 className="text-info"><i class="fas fa-home"></i> Apartment<span className="fw-bold">Shark</span> </h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#apartments">Latest Apartments</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#subscription">Subscription</Nav.Link>
                            <Nav.Link as={Link} to="/explore">Explore All</Nav.Link>
                            {/* <Nav.Link as={Link} to="/profile">View Profile</Nav.Link> */}
                        </Nav>


                        {
                            user.email ?

                                <Nav>
                                    {/* <button className="btn btn-secondary btn-sm bg-primary m-3 "><Nav.Link as={Link} to="/addnewapartment">Add a New Apartment</Nav.Link></button>
                                    <button className="btn btn-secondary btn-sm bg-primary m-3 "><Nav.Link as={Link} to="/addreview">Add a Review</Nav.Link></button>
                                    <button className="btn btn-secondary btn-sm bg-primary m-3"><Nav.Link as={Link} to="/myorders">My Orders</Nav.Link></button>
                                    <button className="btn btn-secondary btn-sm bg-primary  m-3"><Nav.Link as={Link} to="/allorders">Admin</Nav.Link></button> */}
                                    <button className="bg-success rounded fw-bold m-3"><Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link></button>
                                    <button onClick={logOut} className="btn btn-secondary m-3">Sign Out</button>
                                    <button className="btn text-white bg-dark m-3">{user.displayName}</button>
                                    {/* <Nav.Link eventKey={2} href="#memes">
                                        Sign in as: {user.email}
                                    </Nav.Link> */}
                                </Nav>

                                :

                                <Nav>
                                    <Nav.Link className="bg-info text-dark rounded fw-bold text-center" as={Link} to="/dashboard">Sign In</Nav.Link>
                                </Nav>

                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;