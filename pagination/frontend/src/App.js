import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';
import Details from './Details';

function App() {

  const [data1, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/todo")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  })

  return (
    <div>
      <div className="navbar">
        <h1>Pagination of the given data</h1>
      </div>
      <div>
      <Details data1={data1} />
      </div>
    </div>
  )
}

export default App;
