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


// TODO:
// 1. Add a Navigation Bar
// 2. Add a Footer
// 3. Add a Contact Form
// 4. Add a Projects Section
// 5. Add a Skills Section
// 6. Add a About Me Section
// 7. Add a Blog Section
// 8. Add a Resume Section
// 9. Add a Testimonials Section
// 10. Add a Services Section
// 11. Add a Portfolio Section
// 12. Add a Pricing Section
// 13. Add a FAQ Section