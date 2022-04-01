import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Details from './Details';

function App() {
  const [data1, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/showdata")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    
  })
  return (
    <>
      <div className="navbar">
        <h1>The filter of the given data</h1>
      </div>
      <Details data1={data1} />
      
      </>
  );
}

export default App;
