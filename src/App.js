import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import './App.css';



import Navigation from './navigation/navigation';
import CV from './cv/cv';
import Skill from './skill/skill';
import Gist from './blog/gist';
import Contact from './contact/contact';


const App = () => {

  const renderHeader = () => {
    return (<Navigation></Navigation>);
  }

  return (

    <div className="App">
      { renderHeader()}
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/cv" component={CV} />
      <Route path="/skill" component={Skill} />
      <Route path="/gists" component={Gist} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
