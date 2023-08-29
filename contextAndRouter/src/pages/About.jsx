import {ChangeProfile} from "../components/ChangeProfile"
import { useContext } from 'react'
import { AppContext } from '../App'
function About() {
  const{username} = useContext(AppContext);
  return (
    <div className='w-full h-screen bg-gray-100'>
      
      {username}
      <ChangeProfile/>
    </div>
  )
}

export default About
