import { useContext } from 'react'
import { AppContext } from '../App'

function home() {
  const {username} =useContext(AppContext);
  return (
    <div className='w-full h-screen bg-gray-100'>
      {username}
    </div>
  )
}

export default home
