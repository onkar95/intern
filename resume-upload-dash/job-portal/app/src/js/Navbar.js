import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import '../css/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from '../UserContext';

function Navbar() {
    const { user, setUser } = useContext(UserContext);

    const logout = async () => {
        try {
            const res = await fetch('https://onkar-auth-demo.herokuapp.com/logout', {
            // const res = await fetch('http://localhost:5000/logout', {
                credentials: 'include',
            });
            const data = res.json();
            console.log('logout data', data);
            setUser(null)
            return <Redirect to='/' />
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>

            <ul>
                <li><Link class="active" to="/home">Home</Link></li>
                {/* <li><Link to="/login">login</Link></li>
                <li><Link to="/register">Register</Link></li> */}
                <Link className="btn btn-danger my-2" to='/' onClick={logout} >
                    Logout
                </Link>
            </ul>
        </div>
    )
}

export default Navbar
