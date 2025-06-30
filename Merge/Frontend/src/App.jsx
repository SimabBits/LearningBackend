import { useEffect, useState, React } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/joke')
    .then(response =>{
      setJokes(response.data);
      console.log(response.data)
    })
    .catch(error => {
      console.log ("error: " + error);
    })
  })

  return (
    <>
      <h1>Current joke count</h1>
      <span>{jokes.length}</span>
      <ul>
        {jokes.map((joke, index) => (
          <li id={index} >{joke.content}</li>
))}
      </ul>
    </>
  );
}

export default App;

