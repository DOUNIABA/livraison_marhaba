import React from 'react';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
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
                    <Nav>
                        <Nav.Link onClick={logOut}>log out</Nav.Link>
                    </Nav>

                   :<Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/Register">Register</Nav.Link>
                    </Nav>

                  }
          </Nav>
        
      
      </Navbar>
    )
}

export default Header;