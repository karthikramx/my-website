import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Portfolio from './Pages/Portfolio';
import Projects from './Pages/Projects';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/SideBar/SideBar';


// TODO: 
// 1. Add a SideBar
// 2. Add a blog page
// 3. Add a cards component - Image, with title and description
// 4. Create a blog page - that renders from medium : https://medium.com/@cndro/how-to-get-data-from-medium-api-ca3b3a660a81


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <NavBar />
          <Sidebar />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/blog" render={() => <Blog />} />
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