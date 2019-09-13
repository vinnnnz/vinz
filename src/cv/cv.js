import React, { Component } from 'react';
import './cv.css';

class CV extends Component {
   
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() { 
        return ( 
            <div id="cv_parent">
                <div className="author-header">
                    <span className='first-name'>VINEET</span><span className='last-name'>KUMAR</span>
                </div>
            </div>
         );
    }
}
 
export default CV;