import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get()
  })

  return (
    <>
      <h1>Current joke count</h1>
      <span>{jokes.length}</span>
      <ul>
        {jokes.map((joke, index) => (
          <li key={index}>{joke.content}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

