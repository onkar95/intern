import React, { useState, useContext } from "react";
import { UserContext } from '../../UserContext';
// import '../css/register.css'
import '../../../frontend/node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from "react-router-dom";
import Navbar1 from "./Navbar";



function StudentRegister(props) {
    const { user, setUser } = useContext(UserContext);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Class, setClass] = useState('')
    const [Age, setAge] = useState('')
    const [phoneNo, setPhoneNo] = useState()

    const [ClassError, setClassError] = useState('')
    const [AgeError, setAgeError] = useState('')
    const [phoneNoError, setPhoneNoError] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const handleSubmit = async e => {
        e.preventDefault();
        setEmailError('');
        setNameError('');
        setPasswordError('');
        console.log(name, email, password, Class, Age)
        try {
            // const res = await fetch('https://my-site-12.herokuapp.com/signup', {
            const res = await fetch('http://localhost:5000/StudentRegister', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({ name, email, password,Class, Age,phoneNo }),
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await res.json();
            console.log(data)
            if (data.errors) {
                setEmailError(data.errors.email);
                setNameError(data.errors.name);
                setClassError(data.errors.name);
                setPasswordError(data.errors.password);

            }
            if (data.user) {
                setUser(data.user)
            }
            
        
        } catch (error) {
            console.log(error)
        }
        if (user) {
            return <Redirect to='/login' />
        }
    
    }
    if (!user) {
        return <Redirect to='/login' />
    }
    return (
        <div>
            {/* <Navbar1 /> */}

            <div className="row">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                    <h4 className="text-muted text-center mb-5">Create account as Student</h4>

                    <div className="card p-5 shadow">

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" > Enter your name </label>
                                <input type="name" className="form-control" id="name" onChange={(e) => setName(e.target.value)} value={name} name='name' />
                            </div>
                            <div className="alert-danger">
                                {nameError}
                            </div>
                            <div className="form-group">
                                <label htmlFor="username" >class </label>
                                <input type="text" className="form-control" id="class" onChange={(e) => setClass(e.target.value)}
                                    value={Class} name='class' />
                            </div>
                            <div className="alert-danger">
                                {ClassError}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNo" >phoneNo </label>
                                <input type="number" className="form-control" id="phoneNo" onChange={(e) => setPhoneNo(e.target.value)} value={phoneNo} name='phoneNo' />
                            </div>
                            <div className="alert-danger">
                                {phoneNoError}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" >Email address</label>
                                <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email} name='email' />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="alert-danger">
                                {emailError}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" >Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
                            </div>
                            <div className="alert-danger">
                                {passwordError}
                            </div>
                            <div className="form-group">
                                <label > Age</label>
                                <input type="number" className="form-control" onChange={(e) => setAge(e.target.value)} value={Age} name='Age' />
                            </div>
                            <div className="alert-danger">
                                {AgeError}
                            </div>


                            <button  className="btn btn-primary btn-block" >Register</button>
                        </form>
                    </div>
                </div>
                <div className="col-sm-2" />
            </div>
       
        </div>
    )
}

export default StudentRegister
