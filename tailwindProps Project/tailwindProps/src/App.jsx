import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myArr = [1,2,3,4];
  const myObj = {
    name:"Samarth",
    age:22
  }
  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-2xl'>
        Hello Devs!!
      </h1>
      <Card username="Samarth" btnText="click me!"/>
      <Card username="Sarthak" btnText="visit me!"/>

    </>
  )
}

export default App
