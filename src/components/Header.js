import React, { useState} from 'react'
import { Nav, NavItem, Collapse, Navbar, NavbarToggler } from "reactstrap"
import { NavLink } from 'react-router-dom'

const Header = () => {
    // State variable to manage visibility of resp menu
    const [isOpen, setIsOpen] = useState(false)
    const email = "aguirree1985@gmail.com"
    // Function to toggle the resp menu
    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='header'>
            {/* Navbar component from Bootstrap */}
            <Navbar expand="md">
            {/* NavbarToggler for responsive menu */}
            <NavbarToggler onClick={toggleNavbar} />

            {/* Collapse componet to hide/show content based on screen size */}
                <Collapse isOpen={isOpen} navbar>
                    {/* Left-aligned navigation items */}
                    <div className='header-left'>
                    <Nav className="mr-auto">
                        <NavItem>
                            <NavLink className="nav-link" to="/" activeClassName="active-link">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutme" activeClassName="active-link-aboutme"
                            >
                                About Me
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/myprojects" activeClassName="active-link-myprojects"
                            >
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact" activeClassName="active-link-contact"
                            >
                                Contact Me
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </div>
                    {/* Right-aligned navigation items */}
                    <div>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <a className="nav-link" href={`mailto:${email}`} aria-label="Email">
                                {email}
                            </a>
                        </NavItem>
                    </Nav>
                    </div>
                </Collapse>
            </Navbar>
        </div >
    
        
    );
}

export default Header