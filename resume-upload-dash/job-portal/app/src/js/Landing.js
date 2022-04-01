import React from 'react'
import { Button, Container, Row } from "react-bootstrap";
import '../css/landing.css'
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
                            </div>
                            <div className="buttonContainer">
                                <Link to="/loginUser">
                                    <Button size="lg" className="landingbutton">
                                        get Heired 
                                    </Button>
                                </Link>
                                <Link to="/loginCompaney">
                                    <Button size="lg" className="landingbutton">
                                        Heir
                                    </Button>
                                </Link>
                                <Link to="/Register">
                                    <Button variant="outline-primary" size="lg" className="landingbutton">
                                        Signup
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
