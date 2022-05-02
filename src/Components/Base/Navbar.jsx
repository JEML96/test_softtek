import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import LoginBtn from '../Login/LoginBtn';
import ProfileInfo from '../Login/Profile';

function NavbarMenu() {
  return (
    <Navbar bg='secondary' expand='lg' className='navbar navbar-light'>
      <Container className='text-secondary'>
        <Navbar.Brand
          style={{
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          SoftTek Test JEML
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/Awesome'>Awesome</Nav.Link>
          </Nav>
          <LoginBtn />
          <ProfileInfo />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
