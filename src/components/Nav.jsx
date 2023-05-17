import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Whatsapp from './whatsapp_icon.svg';

const Nav = () => (
  <Navbar variant="dark" className="header" expand="lg">
    <Container>
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <img
          alt=""
          src={Whatsapp}
          width="50"
          height="50"
        />
        <span className="text-uppercase">Messanger</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Nav;
