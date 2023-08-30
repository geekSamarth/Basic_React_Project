import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Navbar from "./navbar";
import {QueryClient,QueryClientProvider} from 'react-query';
const queryClient = new QueryClient({defaultOptions:{
  queries:{
    refetchOnWindowFocus:true,
  }
}});
function App() {
  return (
    <div className="w-full h-screen bg-gray-200">
        <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
        </QueryClientProvider>
    </div>
  );
}

export default App;
