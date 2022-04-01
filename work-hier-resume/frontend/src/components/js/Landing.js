import React from 'react'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row } from "react-bootstrap";
import '../css/landing.css'
// import Menu from '@material-ui/core/Menu';
import Menu from "@material-ui/core/Menu"
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";

const Landing = () => {


    return (
        <>
            <div className="main">
                <Container>
                    <Row>
                        <div className="intro-text">
                            <div>
                                <h1 className="title">Welcome to my Dashboard</h1>
                                {/* <p className="subtitle">One Safe place for all your notes.</p> */}
                            </div>
                            <div className="buttonContainer">
                                <Link to="/login">
                                    <Button size="lg" className="landingbutton">
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/TutorRegister">
                                    <Button
                                        variant="outline-primary"
                                        size="lg"
                                        className="landingbutton"
                                    >
                                        Signup as tutor
                                    </Button>

                                </Link>
                                <Link to="/StudentRegister">
                                    <Button variant="outline-primary" size="lg" className="landingbutton">
                                        Signup as student
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Landing
