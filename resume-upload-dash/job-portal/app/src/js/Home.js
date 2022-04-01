import React, { useContext } from "react";
import { UserContext } from '../UserContext';
import Navbar1 from "./Navbar";
import { Link, Redirect } from "react-router-dom";
import UserDashboard from './UserDashboard'
import CompanyDashboard from './CompanyDashboard'
const Home = () => {
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
    <>
      <Navbar1 />
      <div className="m-5">
        <div className="jumbotron">
          <p className="lead">Welcome {user && user.name}</p>
          {user && user.Class ?
            (<UserDashboard />) :
            (<CompanyDashboard />)
          }
          <Link className="btn btn-danger" to='/' onClick={logout} >
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
