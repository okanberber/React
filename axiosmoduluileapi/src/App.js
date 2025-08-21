import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [veri,setVeri] = useState(0);
  const [id,setID] = useState(0);


  useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts").then(murtaza => setVeri(murtaza.data[id]))
  })
  return (
    <div className="App">
      <input type='text' value={id} onChange={deger=> setID(deger.target.value)}></input>
      <p>Id={veri.id}</p>
      <p>UserId={veri.userId}</p>
      <p>Başlık={veri.title}</p>
      <p>İçerik={veri.body}</p>
    </div>
  );
}

export default App;
