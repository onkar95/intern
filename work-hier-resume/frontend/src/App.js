import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/js/Home';
import BecomeTutor from './components/js/BecomeTutor';
import StudentRegister from './components/js/StudentRegister';
import { Route, Switch } from 'react-router-dom';
// import Navbar from './components/js/Navbar';
import Login from './components/js/Login';
import Landing from './components/js/Landing';
import Student from './components/js/Student';
import TutorDashboard from './components/js/TutorDashboard';
import StudentDashboard from './components/js/StudentDashboard';
import Step from './components/js/Step';
import { UserContext } from './UserContext';
import TutorRegister from './components/js/TutorRegister';
import Navbar1 from './components/js/Navbar';

function App() {

  const [user, setUser] = useState(null)
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
  // console.log(data && data);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {/* <Route exact path='/' component={Landing} ></Route> */}
        {data && data.class ?<Navbar1 dashboard={'/StudentDashboard'} /> :<Navbar1 dashboard={'/TutorDashboard'} />}

        <Switch>
          <Route exact path='/BecomeTutor' component={BecomeTutor}></Route>
          <Route exact path='/login' component={Login} ></Route>
          <Route exact path='/' component={Home} ></Route>
          <Route exact path='/student' component={Student} ></Route>
          <Route exact path='/tutorDashboard' component={TutorDashboard} ></Route>

          <Route exact path='/step' component={Step} ></Route>

          <Route exact path='/studentDashboard' component={StudentDashboard} ></Route>

          <Route exact path='/TutorRegister' component={TutorRegister}></Route>

          <Route exact path='/StudentRegister' component={StudentRegister}></Route>
        </Switch>
      </UserContext.Provider>


    </>
  );
}

export default App;
