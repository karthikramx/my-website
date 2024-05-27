import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Portfolio from './Pages/Portfolio';
import Projects from './Pages/Projects';
import Concepts from './Pages/Concepts';
import ProjectRAG from './Pages/ProjectPages/ProjectRAG/ProjectRAG';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/SideBar/SideBar';


// TODO: 
// 1. Add the QnA Application to the RAG Page

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <NavBar />
          <Sidebar />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/blog" render={() => <Blog />} />
            <Route path="/portfolio" render={() => <Portfolio />} />
            <Route exact path="/projects/RAG" render={() => <ProjectRAG />} />
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/concepts" render={() => <Concepts />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;