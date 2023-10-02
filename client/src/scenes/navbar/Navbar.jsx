import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaSearch} from 'react-icons/fa'

export const MainBar = () => {
  return (
    <div >

    <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between" >
      <Container fluid>
        <Navbar.Brand href="#">Rental.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="d-flex" style={{paddingTop:"5px"}}>
            <Form.Control
              type="search"
              placeholder="Search Products"
              className="me-2"
              aria-label="Search"
              
            />
            <FaSearch className='' size={25}/>
          </Form>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Products</Nav.Link>
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Orders</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Location" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Banglore</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Chennai
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Hyderabad
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Kolkata
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Mumbai
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

    </div>
  )
}
