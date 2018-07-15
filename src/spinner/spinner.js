import React, { Component } from 'react';
import './spinner.css';

class Spinner extends Component {
    render() {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="140" width="140" className="loader">
                <circle cx="40" cy="40" r="30" fill="transparent" strokeWidth="2" stroke="#F00">
                    <animateTransform attributeName="transform" type="rotate" begin="0s" dur="5s" from="0 40 40" to="360 40 40" repeatCount="indefinite">     
                    </animateTransform>
                </circle>
            </svg>
        );
    }
}

export default Spinner;