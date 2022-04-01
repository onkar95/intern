import React, { useState, useContext } from "react";
import Student from './Student'
import '../css/student.css'
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from '../../UserContext';
import StudentDashboard from './StudentDashboard'
import Navbar1 from './Navbar'


const TutorDashboard = () => {
    const { user, setUser } = useContext(UserContext);
    const [data, setData] = useState([])
    const [ID, setID] = useState([])
    axios.get('http://localhost:5000/data')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    // console.log(user);

    if (!user) {
        return <Redirect to='/login' />
    }
    return (
        <div className="d-flex m-auto flex-wrap">

            {data.map((val, index) => (
                <>
                    {/* <div className="d-flex m-3"> */}
                        {/* <Link to='/student'>{val.name}</Link> */}
                        <Student val={val} />
                    {/* </div> */}
                </>

            ))}
        </div>
    )
}

export default TutorDashboard
