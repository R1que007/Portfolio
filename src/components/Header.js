import React from 'react'
import { Nav, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className='Header'>
            <div className='HeaderLeft'>
                <Nav >
                    <NavItem>
                        <NavLink className="nav-link" to="/"
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutme">
                            About Me
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="myprojects">
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="contact"
                        //disabled

                        >
                            Contact Me
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div>
                <Nav>
                    <NavItem>
                        <NavLink className="nav-link"  href="#">
                            aguirree1985@gmail.com
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
        </>
    )
}

export default Header