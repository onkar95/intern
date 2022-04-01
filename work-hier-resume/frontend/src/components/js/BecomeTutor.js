import React, { useState, useContext } from "react";
import { UserContext } from '../../UserContext';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Navbar';
// import Alert from '@material-ui/lab/Alert';


function BecomeTutor(props) {
    const { user, setUser } = useContext(UserContext);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [Degree, setDegree] = useState('')
    const [Year, setYear] = useState('')
    const [Stream, setStream] = useState('')
    const [phoneNo, setPhoneNo] = useState()

    const [YearError, setYearError] = useState('')
    const [StreamError, setStreamError] = useState('')
    const [phoneNoError, setPhoneNoError] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [DegreeError, setDegreeError] = useState('')

    const handleSubmit = async e => {
        e.preventDefault();
        setEmailError('');
        setNameError('');
        console.log(name, email, Degree, Year, Stream)
        try {
            // const res = await fetch('https://my-site-12.herokuapp.com/signup', {
            const res = await fetch('http://localhost:5000/BecomeTutor', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({ name, email, Degree, Stream, Year, phoneNo }),
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await res.json();
            // <Alert severity="success">This is a success alert — check it out!</Alert>
            console.log(data)
            if (data.errors) {
                setEmailError(data.errors.email);
                setNameError(data.errors.name);

            }
            // if (data.user) {
            //     setUser(data.user)
            // }
            
        
        } catch (error) {
            console.log(error)
        }
    }
   
    return (
        <div>
                <div className="row">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                    <h4 className="text-muted text-center mb-5">Become a Tutor</h4>

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
                                <label htmlFor="Degree" >Degree</label>
                                <input type="Degree" className="form-control" value={Degree} onChange={(e) => setDegree(e.target.value)} id="password" />
                            </div>
                            <div className="alert-danger">
                                {DegreeError}
                            </div>
                            <div className="form-group">
                                <label htmlFor="username" >degree passout year </label>
                                <input type="text" className="form-control" id="class" onChange={(e) => setYear(e.target.value)}
                                    value={Year} name='Year' />
                            </div>
                            <div className="alert-danger">
                                {YearError}
                            </div>
                            <div className="form-group">
                                <label > Stream</label>
                                <input type="text" className="form-control" onChange={(e) => setStream(e.target.value)} value={Stream} name='Stream' />
                            </div>
                            <div className="alert-danger">
                                {StreamError}
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

export default BecomeTutor
