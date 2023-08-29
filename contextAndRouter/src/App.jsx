import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import project from "./pages/project";
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
            <Route path="/" Component={home} />
            <Route path="/about" Component={about} />
            <Route path="/project" Component={project} />
            <Route path="*" element={<h1>The page is not found. </h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
