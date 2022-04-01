import React, { useState, useContext } from 'react'
import { UserContext } from '../UserContext';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')


  const submitHandler = async e => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    console.log(email, password)
    try {
      // const res = await fetch('https://onkar-auth-demo.herokuapp.com/loginUser', {
      const res = await fetch(`http://localhost:5000/loginUser`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      console.log(data)
      if (data.errors) {
        setEmailError(data.errors.email);
        setPasswordError(data.errors.password);

      }
      if (data.user) {
        setUser(data.user)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const demoUser = () => {
    setPassword('123123')
    setEmail('User123@gmail.com')
  }
  if (user) {
    return <Redirect to='/home' />
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-2" />
        <div className="col-sm-8">
          <h4 className="text-muted text-center mb-5">Create an account</h4>

          <div className="card p-5 shadow">

            <form onSubmit={submitHandler}>

              <h3>Log in</h3>

              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input id="email" type="email" className="form-control"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <div className="alert-danger">{emailError}</div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password :</label>
                <input id="password" type="password" className="form-control"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <div className="alert-danger">{passwordError}</div>
              </div>


              <button className="btn btn-primary  ">Login</button>
              <button onClick={demoUser} className="btn btn-primary ">Demo login</button>
            </form>
          </div>
        </div>
        <div className="col-sm-2" />
      </div>

    </React.Fragment>

  )
}

export default Login

