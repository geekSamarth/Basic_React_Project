import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Samarth");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <div className="w-full h-14 bg-sky-200 flex justify-center items-center gap-8">
            <Link className="text-xl hover:underline" to="/">
              Home
            </Link>
            <Link className="text-xl hover:underline" to="/about">
              About
            </Link>
            <Link className="text-xl hover:underline" to="/project">
              Project
            </Link>
          </div>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
            <Route path="*" element={<h1>The page is not found. </h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
