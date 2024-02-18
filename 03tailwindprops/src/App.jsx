import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "sudh",
    age: 21
  }
  let myArr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-300 text-black p-4 rounded mb-4'>Tailwind test</h1>
      <Card username = "Sudh Code" btnText = "clickme"/>
      <Card username= "sudhanshu"  btnText = 'visit me'/>

    </>
  )
}

export default App
