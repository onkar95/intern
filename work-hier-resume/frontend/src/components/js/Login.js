import React, { useState, useContext } from 'react'
import { UserContext } from '../../UserContext';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import Navbar1 from './Navbar';
import axios from 'axios';
import StudentDashboard from './StudentDashboard';
import TutorDashboard from './TutorDashboard';

const Login = () => {
    const { user, setUser } = useContext(UserContext);

    const [anyUser, setAnyUser] = useState();
    const [login, setLogin] = useState('Student')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const loginHandeler = () => {
        if (login === 'Tutor') {
            setLogin('Student')
        } else if (login === 'Student') {
            setLogin('Tutor')
        }
        // console.log(login);
    }
    const submitHandler = async e => {
        e.preventDefault();
        setEmailError('');
        setNameError('');
        setPasswordError('');
        console.log(name, email, password)
        try {
            // const res = await fetch('https://my-site-12.herokuapp.com/login', {
            const res = await fetch(`http://localhost:5000/${login}Login`, {
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
                setAnyUser(data.user)
                console.log(anyUser);
            }


        } catch (error) {
            console.log(error)
        }
    }
    const demoUser = () => {
        setName('User')
        setPassword('123123')
        setEmail('User123@gmail.com')
    }
console.log(anyUser);
    if (user) {
     return   <Redirect to='/' />
     }
//    else if (login === 'Tutor') {
//         //         <Redirect to='/tutorDashboard' />
//         return < TutorDashboard />
//     }
//     else if ( login === 'Student') {
//         //     return <Redirect to='/studentDashboard' />
//         return < StudentDashboard />

//     }
    return (
        <React.Fragment>
            {/* <Navbar1 /> */}

            <div className="row">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                    <button className="text-muted text-center mb-5" onClick={loginHandeler}>Log as {login}</button>
                    {/* <button className="text-muted text-center mb-5" onClick={loginHandeler}>Log as Student</button> */}
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


                            <button className="btn btn-primary btn-block">Login</button>
                            <button onClick={demoUser} className="btn btn-primary btn-block">Demo login</button>
                        </form>
                    </div>
                </div>
                <div className="col-sm-2" />
            </div>

        </React.Fragment>

    )
}

export default Login

