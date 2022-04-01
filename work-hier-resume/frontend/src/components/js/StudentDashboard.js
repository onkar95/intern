import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../UserContext'; import Student from './Student'
import axios from 'axios'
import Navbar1 from './Navbar';

const StudentDashboard = () => {
    const { user, setUser } = useContext(UserContext);
    // const [data, setData] = useState(props.data)
    // const [user, setUser] = useState(null)
    const [data, setData] = useState([])
    useEffect(() => {
        const verifyUser = async () => {
            try {
                // const res = await fetch('https://my-site-12.herokuapp.com/verifyuser', {
                const res = await fetch('http://localhost:5000/verifyuser', {
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' }
                });
                const data = await res.json();
                setUser(data);
                setData(data);
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
        verifyUser()
    }, [])
    const data1  = data;
    console.log(data1);
    return (
        <div>
            {/* helo */}
            {/* <Navbar1/> */}
            <Student val={data} />

        </div>
    )
}

export default StudentDashboard
