
import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from '../../UserContext';
import Navbar1 from "./Navbar";

const TutorRegister = (props) => {
  const { user, setUser } = useContext(UserContext);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const submitHandler = async e => {
    e.preventDefault();
    setEmailError('');
    setNameError('');
    setPasswordError('');
    console.log(name, email, password)
    try {
      // const res = await fetch('https://my-site-12.herokuapp.com/signup', {
      const res = await fetch('http://localhost:5000/TutorRegister', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      console.log(data)
      if (data.errors) {
        setEmailError(data.errors.email);
        setNameError(data.errors.name);
        setPasswordError(data.errors.password);

      }
      if (data.user) {
        setUser(data.user)
      }
    } catch (error) {
      console.log(error)
    }
    // if (user) {
    //   return <Redirect to='/login' />
    // }

  }


  if (user) {
    return <Redirect to='/login' />
  }
  return (
    <>
      {/* <Navbar1 /> */}

      <div className="row">
        <div className="col-sm-2" />
        <div className="col-sm-8">
          <h4 className="text-muted text-center mb-5">Create account as Tutor</h4>

          <div className="card p-5 shadow">

            <form onSubmit={submitHandler}>
              <h2>Sign up</h2>
              <div className="form-group">
                <label htmlFor="name">Name :</label>
                <input id="name" type="text" className="form-control"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <div className="alert-danger">{nameError}</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input id="email" type="email" className="form-control"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <div className="alert-danger">{emailError}</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Password :</label>
                <input id="password" type="password" className="form-control"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <div className='alert-danger'>{passwordError}</div>
              </div>

              <button className="btn btn-primary btn-block">Sign up</button>

            </form>

          </div>
        </div>
        <div className="col-sm-2" />
      </div>
    </>
  );
};

export default TutorRegister;
