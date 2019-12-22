import React, { Component} from 'react';
import './App.css';
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'

class App extends Component {
  render() {
    return (
      <div>
		  <About></About>
			<Projects></Projects>
			<Skills></Skills>
      </div>
    );
  }
}

export default App;
