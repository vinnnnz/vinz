import React, { Component } from 'react';
import './cv.css';
import LeftPane from './pane/leftpane';
import RightPane from './pane/rightpane';

class CV extends Component {
   
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() { 
        return ( 
            <div id="cv_paper">
                <LeftPane />
                <RightPane />
            </div>
         );
    }
}
 
export default CV;