import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addCount = ()=>{
    count<20 ?setCount(count+1):20;
  }
  const removeCount = ()=>{
    count>0?setCount(count-1):0;
  }
  const resetCount = ()=>{
    setCount(0);
  }
  return (
    <>
      <div className='valueBox'>{count}</div>
      <button onClick={addCount}>Increase</button>
      <button onClick={removeCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </>
  )
}

export default App
