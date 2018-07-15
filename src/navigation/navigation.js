import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faEnvelope, faPencilAlt, faCalendarAlt, faRuler, faFileAlt} from '@fortawesome/free-solid-svg-icons';

library.add(
    faHome,
    faEnvelope,
    faPencilAlt,
    faCalendarAlt,
    faRuler,
    faFileAlt
  )

class Navigation extends Component {
    render() {
        return(
            <div className="navigation">
                <a className='link colored'>Menu <span className="leftArrow"></span></a>
                <Link className='link' to="/"><FontAwesomeIcon icon={['fa', 'home']} /> Home</Link>
                <Link className='link' to="/cv"><FontAwesomeIcon icon={['fa', 'file-alt']} /> CV</Link>
                <Link className='link' to="/skill"><FontAwesomeIcon icon={['fa', 'ruler']} /> Skills</Link>
                <Link className='link' to="/timeline"><FontAwesomeIcon icon={['fa', 'calendar-alt']} />Timeline</Link>
                <Link className='link' to="/blog"><FontAwesomeIcon icon={['fa', 'pencil-alt']} /> Blog</Link>
                <Link className='link' to="/contact"><FontAwesomeIcon icon={['fa', 'envelope']} /> Contact</Link>
            </div>
        );
    }
}

export default Navigation;