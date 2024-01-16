import { useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] =useState(5)
//let counter=5;

 const addValue = () => {
  counter++;
  console.log(counter);
  setCounter(counter)
}


const delValue = () => {
  if(counter>0)
  {
    counter--;
  }
 
 setCounter(counter)
}


  return (
    <>
  <h1>Jay Shree Ram</h1>
  <h2>Visitors Counter ={counter}</h2>
  <button className='addButton' onClick={addValue}>Add</button>
  <br>
  </br>
  <button className='delButton' onClick={delValue}>Delete</button>
    </>
  )
}

export default App
 