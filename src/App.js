import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Portfolio from './Pages/Portfolio';
import Projects from './Pages/Projects';
import Concepts from './Pages/Concepts';
import Art from './Pages/Art';
import ProjectRAG from './Pages/ProjectPages/ProjectRAG/ProjectRAG';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


// TODO: 
// 1. home button click, make a better logo
// 2. viewable on mobile
// 3. create your art page (see where you want to host images)
// 4. create a page just to list all books you've read... (select 100 books to read in a lifetime)
// 5. project 2: Generative AI - project : choose carefully! ()
// 6. plan refactoring
// 7. show local time
// 8. create a theme of who you are
// 9. post videos
// 10. calandly link to book a meeting / call
// 11. Admin page for your website... (to update content)
// 12. choose a better font
// 13. social links...  
// 14. clean up linkedin 
// 15. donate for fun projects...

function App() {
  return (
    <div >
      <Router>
        <div className="App">
          <NavBar />
          <Switch >
            <Route exact path="/" render={() => <Home />} />
            <Route path="/blog" render={() => <Blog />} />
            <Route path="/portfolio" render={() => <Portfolio />} />
            <Route exact path="/projects/RAG" render={() => <ProjectRAG />} />
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/concepts" render={() => <Concepts />} />
            <Route path="/art" render={() => <Art />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;