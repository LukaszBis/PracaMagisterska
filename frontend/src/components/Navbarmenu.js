// components/Navbar.js
import React, { useState, useRef } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbarmenu = () => {
  const [show, setShow] = useState(false);
  const offcanvasRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Aplikacja do Rezerwacji Tematów Prac Dyplomowych</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
            ref={offcanvasRef}
          >
            <Offcanvas.Header className='offtitle' closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 nav">
                <Nav.Link className='navlink' as={Link} to="/" onClick={handleClose}>Strona Główna</Nav.Link>
                <Nav.Link className='navlink' as={Link} to="/registertopic" onClick={handleClose}>Zarejestruj Temat</Nav.Link>
                <Nav.Link className='navlink' as={Link} to="/topics" onClick={handleClose}>Lista Tematów</Nav.Link>
                <Nav.Link className='navlink' as={Link} to="/admin" onClick={handleClose}>Panel Administracyjny</Nav.Link>
                <Nav.Link className='navlink' as={Link} to="/login" onClick={handleClose}>Zaloguj się</Nav.Link>
                <Nav.Link className='navlink' as={Link} to="/register" onClick={handleClose}>Zarejestruj się</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* <Navbar expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Aplikacja do Rezerwacji Tematów Prac Dyplomowych</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
            ref={offcanvasRef}
          >
            <Offcanvas.Header className='offtitle' closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 nav">
                <Nav.Link className='navlink' as={Link} to="/" onClick={handleClose}>Strona Główna</Nav.Link>
                <Nav.Link className='navlink' as={Link} to="/register" onClick={handleClose}>Zarejestruj Temat</Nav.Link>
                <Nav.Link className='navlink' as={Link} to="/topics" onClick={handleClose}>Lista Tematów</Nav.Link>
                <Nav.Link className='navlink' as={Link} to="/admin" onClick={handleClose}>Panel Administracyjny</Nav.Link>
                <Nav.Link className='navlink' as={Link} to="/logout" onClick={handleClose}>Wyloguj się</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}
    </>
  );
};

export default Navbarmenu;
