import React from 'react'
import { Nav, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const email = "aguirree1985@gmail.com"

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
                        <a className="nav-link" href={`mailto:${email}`} aria-label="Email">
                            {email}
                        </a>
                    </NavItem>
                </Nav>
            </div>
        </div>
        </>
    )
}

export default Header