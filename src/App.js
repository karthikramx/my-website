import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/portfolio" render={() => <Portfolio />} />
            <Route path="/projects" render={() => <Projects />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;