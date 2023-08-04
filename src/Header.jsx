import React from "react";
import { useNavigate,Link } from "react-router-dom";
// import { useState,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header(props){
    let navigate = useNavigate()
    let token = localStorage.getItem('token')

    const onClickLogout =()=>{
        localStorage.removeItem('token')
        navigate("/login")
    }
    return(
        <div onClick={onClickLogout}>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/210630645/original/a76fda248af72678c7b8ecd8d7e0538faffc8d88/create-luxury-modern-logo-design.jpg" className="logo-1 mx-3 "/>
          <Navbar.Brand href="#home">DevHubs</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" >My Profile</Nav.Link>
           <button className="bg-primary mx-2">LogOut</button>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
}
export default Header;