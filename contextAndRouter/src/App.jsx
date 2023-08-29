import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import home from './components/home'
import about from './components/about'
import project from './components/project'


function App() {
  
  return (
   <div className="">
    <Router>
      <div className='w-full h-10 bg-sky-200 flex justify-center align-middle gap-3'>
        <Link to='/'>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
      </div>
      <Routes>
        <Route path='/' Component={home}/>
        <Route path='/about' Component={about}/>
        <Route path='/project' Component={project}/>
        <Route path='*' element={<h1>The page is not found. </h1>} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
