import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.css"
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Home } from '../mycontent/Home';
import { Skill } from '../mycontent/Skill';
import { Contact } from '../mycontent/Contact';
import { About } from '../mycontent/About'
import './Menu.css'

export const Menu = () => {
    return (
      <div>
        <Navbar bg="dark" expand="lg" >
          <Container fluid>
          <Navbar.Brand href="#"><b className='port'>Port<span className='folio'>folio</span></b></Navbar.Brand>
          
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 offset-3 menu"
                navbarScroll
              >
                <Nav.Link href="#/home" className='text-white offset-2'>Home</Nav.Link>
                <Nav.Link href="#/skill" className='text-white offset-2'>Skills</Nav.Link>
                <Nav.Link href="#/about" className='text-white offset-2'>About</Nav.Link>
                <Nav.Link href="#/contact" className='text-white offset-2'>Contact</Nav.Link>
          
               
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <HashRouter>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/skill' element={<Skill/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Navigate to='/home'/>} />
          </Routes>
        </HashRouter>
        </div>
      );
      
}
