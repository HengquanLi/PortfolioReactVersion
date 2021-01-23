import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
    // <div className="App">
    //   <Nav />
    //   <Home />
    //   <About />
    //   <Portfolio />
    //   <Contact />
    //   <Footer />
    // </div>
  );
}

export default App;
