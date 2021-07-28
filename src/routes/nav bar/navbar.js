import React from 'react';
import './nav.css';
import Image from 'react-bootstrap/Image';
import nav_logo from './nav-logo.png';
import {Navbar, Nav,Form,Button} from "react-bootstrap";

export default function navbar() {
    return (
        <div>
              <Navbar  className = "navbarcss"  fixed="top"  expand="lg" variant="dark">
              <Navbar.Brand href="/"><Image src={nav_logo} height = "50px" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href='/about'>Aboutus</Nav.Link>
                  <Nav.Link href='/schools'>Schools</Nav.Link>
                  <Nav.Link href='/downloads'>Learning Resources</Nav.Link>
                  <Nav.Link href='/downloads'>Downloads</Nav.Link>
                  
              </Nav>
                <Form inline>
                    <Button variant="outline-warning">Login</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
