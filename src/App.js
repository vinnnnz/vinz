import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import './App.css';


import Navigation from './navigation/navigation';

import Particles from 'react-particles-js';


class App extends Component {

  renderHeader() {
    return(<Navigation></Navigation>);
  }

  render() {
    return (
      <div className="App">
         { this.renderHeader() }
        <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                background: '#009988',
                position: 'fixed',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
                zIndex: '-1' 
              }}
            />
        
        <Route path="/" exact component={Home} />
        <Route path="/cv" component={Home} />
        <Route path="/skill" component={Home} />
        <Route path="/timeline" component={Home} />
        <Route path="/blog" component={Home} />
        <Route path="/contact" component={Home} />
       </div>
    );
  }
}

export default App;
