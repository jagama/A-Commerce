import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Badge } from 'antd';

// passing setUrl as possibility to mutate init state[url] on click
export default function Navigation({ setEndUrl, count }) {

    return (
        //navbar wrapper, will use {Link} as => to redirect routing

        <div className="nav-wrapper">
            <Navbar
                fixed="top"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Navbar.Brand as={Link} to="/" onClick={() => setEndUrl(100)}> {/* dynamic portion, added to my url */}
                    <h1 style={{ color: "orange" }}>A-Commerce</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ margin: 'auto' }}>
                        <Nav.Link as={Link} to="/" onClick={() => setEndUrl(200)}> {/* dynamic portion, added to my url */}
                            <h4>Home</h4>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/" onClick={() => setEndUrl(300)}> {/* dynamic portion, added to my url */}
                            <h4>Travel</h4>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/" onClick={() => setEndUrl(400)}> {/* dynamic portion, added to my url */}
                            <h4>Coupon</h4>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/">
                            <h4>Food</h4>
                        </Nav.Link>
                    </Nav>
                    <div className="counter d-flex justify-content-around">
                        <Nav.Link as={Link} to="/cart" className='px-2' style={{ color: 'white' }}> {/* dynamic portion, added to my url */}
                            <h4>Your Cart</h4>
                        </Nav.Link>
                        <Badge count={count} showZero />
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
