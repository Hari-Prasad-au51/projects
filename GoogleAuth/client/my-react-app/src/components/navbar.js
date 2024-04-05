import React, { useContext } from 'react';
import { UserContext } from './userContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  const { user } = useContext(UserContext);
  const logout=()=>{
    window.open("http://localhost:8800/auth/logout","_self")
  }
  return (
    <>
     <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>Auth brand</Navbar.Brand>
        <Nav className="ms-auto me-0">
         {user &&<Nav.Link onClick={logout}>Log out</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationBar
