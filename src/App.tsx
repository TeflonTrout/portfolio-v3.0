import { Routes, Route } from "react-router-dom"
import './App.css';
import { Navbar } from './components';
import { About, Home, Projects, Web3 } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/web3" element={<Web3 />} />
      </Routes>
    </div>
  );
}

export default App;
