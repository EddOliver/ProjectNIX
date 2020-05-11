import React, { useState } from 'react';
import Logo from "../assets/logo.svg"
import "./css/style.css"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {isMobile} from "react-device-detect";

const MyNavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  if(isMobile)
  {
    return (
      <div>
        <Navbar light>
        <NavbarBrand style={{fontSize:"30px",color:"white"}} href="/" className="mr-auto"><img src={Logo} style={{height:"80px",paddingTop:"14px"}} />
        &nbsp;ProjectNYX
             </NavbarBrand>
          <NavbarToggler style={{backgroundColor:"white",width: "60px",height: "40px",backgroundSize: "cover"}} onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink id="navig" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navig" href="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navig" href="/recommendations">Recommendations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navig" href="/video">Demo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navig" target="_blank" href="https://github.com/EddOliver/ProjectNIX">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  else
  {
    return (
      <div>
        <Navbar light>
        <NavbarBrand style={{fontSize:"34px",color:"white"}} href="/" className="mr-auto"><img src={Logo} style={{height:"80px",paddingTop:"14px"}} />
        &nbsp;ProjectNYX
             </NavbarBrand>
            <Nav style={{color:"white"}}>
              <NavItem>
                <NavLink id="navig" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navig" href="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navig" href="/recommendations">Recommendations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navig" href="/video">Demo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navig" target="_blank" href="https://github.com/EddOliver/ProjectNIX">Github</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
  }

export default MyNavBar;