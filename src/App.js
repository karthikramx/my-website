import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Projects from './Pages/Projects';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;