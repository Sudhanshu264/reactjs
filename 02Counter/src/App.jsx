
import { useState } from 'react'
import './App.css'

function App() {

let [counter, setCounter] = useState(0)

// let Counter = 5
const addValue = () => {
  if(counter<20)
  setCounter(counter + 1)
  
}

const removeValue = () => {
  if(counter>0)    
  setCounter(counter - 1)
  
}




  return (
    <>
     
    <h1>Counter Value: {counter}</h1>
    <button onClick={addValue}>Increase Value{counter}</button>
    <button onClick={removeValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
