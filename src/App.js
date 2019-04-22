import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import './App.css';


import Navigation from './navigation/navigation';
import CV from './cv/cv';
import Skill from './skill/skill';


class App extends Component {

  renderHeader() {
    return(<Navigation></Navigation>);
  }

  render() {
    return (
      <div className="App">
         { this.renderHeader() }
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/cv" component={CV} />
        <Route path="/skill" component={Skill} />
        <Route path="/timeline" component={Home} />
        <Route path="/blog" component={Home} />
        <Route path="/contact" component={Home} />
       </div>
    );
  }
}

export default App;
