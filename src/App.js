import React, {Component} from 'react';
import './App.css';
import Nav from './Views/Nav/Nav';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Skills from './Views/Skills/Skills';
import Projects from './Views/Projects/Projects';
import Contact from './Views/Contact/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    );
  }
}

export default App;