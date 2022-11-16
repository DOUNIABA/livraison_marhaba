import React from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar';

function Header(){
  
  const navigate = useNavigate()
  function logOut()
  {
    localStorage.clear();
    navigate("/login")
  }
 
    return(
        <Navbar bg="light" expand="lg">

            {/* <Nav className="me-auto">
              <Nav.Link href="#home"></Nav.Link>
            </Nav> */} 
          <Nav className="d-flex">
                  { localStorage.getItem("token")?
                    <Dropdown>
                          <Dropdown.Toggle variant="with" id="dropdown-basic"> { localStorage.getItem("token")} </Dropdown.Toggle> 
                          <Dropdown.Item onClick={logOut}>log out</Dropdown.Item>
                    </Dropdown>
                  : <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/Register">Register</Nav.Link>
                    </Nav>

                  }
          </Nav>
        
      
      </Navbar>
    )
}

export default Header;