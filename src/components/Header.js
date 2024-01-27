import React from 'react'
import { Nav, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const email = "aguirree1985@gmail.com"

    return (
        <div className='header'>
            <div className='header-left'>
                <Nav>
                    <NavItem>
                        <NavLink className="nav-link" to="/" activeClassName="active-link">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutme" activeClassName="active-link">
                            About Me
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/myprojects" activeClassName="active-link">
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contact" activeClassName="active-link">
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
    );
}

export default Header