import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => {
    return (
        <div>
            <p>Useful Links</p>
            <Nav>
                <NavItem>
                    <NavLink href="/">Register</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Log In</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/userlist">Users List</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Navigation;
