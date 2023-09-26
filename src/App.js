import React, {useState} from 'react'
import './App.css';
import tt from './data';
function App() {
  const[t,setT]= useState(tt)
  return (
    <div>
       <h1>Our Tours</h1>
     {
      t.map((a,i)=>{
       return (
        <div className='card'>
         
          <img style={{width:"600px"}} src={a.img}/>
          <div>
          <h2>{a.sub}</h2>
          <h3>{a.price}</h3>
          </div>
          <h4>{a.description}</h4>
          <button>Not Interested</button>
        </div>
        
       )
            
      })
     }
    </div>
  );
}

export default App;
