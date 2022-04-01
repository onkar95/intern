import React, { useContext, useEffect, useState } from "react";
import { UserContext } from '../../UserContext';
import { Link, Redirect } from 'react-router-dom'
import '../css/navbar.css'
// import  NavDropdown  from 'react-bootstrap/NavDropdown'
// import  Nav from 'react-bootstrap/Navbar'
import '../../../frontend/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Menu from "@material-ui/core/Menu"
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
function Navbar1(props) {
    const { user, setUser } = useContext(UserContext);
    // const [anyUser, setAnyUser] = useState(false);

    const logout = async () => {
        try {
            // const res = await fetch('https://my-site-12.herokuapp.com/logout', {
            const res = await fetch('http://localhost:5000/logout', {
                credentials: 'include',
            });
            const data = res.json();
            console.log('logout data', data);
            setUser(null)
        } catch (error) {
            console.log(error)
        }


    }
    console.log(user)
    return (
        <div>
            <Navbar bg="light" expand="lg">
                {/* {user && user.Class ?
                    (<Navbar.Brand href="/studentDashboard">Student Dashboard</Navbar.Brand>) :
                    (<Navbar.Brand href="/tutorDashboard">Teacher Dashboard</Navbar.Brand>)
                } */}
                <Navbar.Brand href="/">home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  >
                        <Nav.Link href="">About us</Nav.Link>
                        <Nav.Link href="">course</Nav.Link>
                        <Nav.Link href="/BecomeTutor">become a touter</Nav.Link>
                        <Nav.Link href="login">login</Nav.Link>
                        <NavDropdown title="Register" id="basic-nav-dropdown">
                            <NavDropdown.Item href="StudentRegister">As Student</NavDropdown.Item>
                            <NavDropdown.Item href="TutorRegister">As tutor</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                        <Nav.Link href="">book a free session</Nav.Link>
                        <Nav.Link  onClick={logout}><Link className="btn btn-danger" >
                            Logout
                        </Link> </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbar1;
