// components/Navbar.js
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav className='nav' justify variant="underline" defaultActiveKey="/">
      <Nav.Item className='navitem'>
        <Nav.Link className='navlink' as={Link} to="/">Strona Główna</Nav.Link>
      </Nav.Item>
      <Nav.Item className='navitem'>
        <Nav.Link className='navlink' as={Link} to="/register">Zarejestruj Temat</Nav.Link>
      </Nav.Item>
      <Nav.Item className='navitem'>
        <Nav.Link className='navlink' as={Link} to="/topics">Lista Tematów</Nav.Link>
      </Nav.Item>
      <Nav.Item className='navitem'>
        <Nav.Link className='navlink' as={Link} to="/admin">Panel Administracyjny</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
