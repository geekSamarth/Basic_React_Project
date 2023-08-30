import {Link}  from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-14 flex justify-center items-center gap-14 bg-sky-300 text-xl'>
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Navbar