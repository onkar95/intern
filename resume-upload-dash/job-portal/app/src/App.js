import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './js/Home';
import Register from './js/Register';
import { Route, Switch } from 'react-router-dom';
import Login from './js/Login';
import { UserContext } from './UserContext';
import Landing from './js/Landing';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await fetch('https://onkar-auth-demo.herokuapp.com/verifyuser', {
        // const res = await fetch('http://localhost:5000/verifyuser', {
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.log(error)
      }
    }
    verifyUser()
  }, [])

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Route exact path='/' component={Landing} ></Route>
        <Switch>
          <Route path='/login' component={Login} ></Route>
          <Route path='/home' component={Home} ></Route>
          <Route path='/register' component={Register}></Route>
        </Switch>
      </UserContext.Provider>

    </>
  );
}

export default App;
