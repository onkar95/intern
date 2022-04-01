import React, { useContext, useEffect, useState } from "react";
import { UserContext } from '../../UserContext';
// import axios from "axios";
// import Navbar1 from "./Navbar";
import { Link } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";
import TutorDashboard from "./TutorDashboard";

const Home = (props) => {
  const { user, setUser } = useContext(UserContext);

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
  return (
    <>
      {/* <Navbar1 /> */}
      <div className="m-5">
        <div className="jumbotron">
          <p className="lead">Welcome {user && user.name}</p>
          {user && user.Class ?
            (<StudentDashboard />) :
            (<TutorDashboard />)
          }
          {/* <Link className="btn btn-danger" to='/login' onClick={logout} >
            Logout
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Home;
