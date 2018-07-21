import React, { Component } from 'react';
import Spinner from '../spinner/spinner';

import './home.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            showSpinner: 'show'
        };
    }

    componentDidMount() {
        this.setState({
            showSpinner: 'hide'
        });
    }

    renderSpinner() {
        return(
            <Spinner></Spinner>
        );
    }

    render() {
        return (
            <div className="home-card">
                <div className={this.state.showSpinner}>
                    {this.renderSpinner()}
                </div>
                <div className="author">
                    <div className="author-name">VINEET KUMAR</div>
                    <div className="hrl"></div>
                </div>

                <div className="intro">
                    <div className="intro-description">
                        Software | UI developer
                    </div>
                </div>
                <div className="decorator"></div>
            </div>
        );
    }
}

export default Home;