import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink className='link' activeclassname="active" to="/home"><FontAwesomeIcon icon={['fa', 'home']} /> Home</NavLink>
                <NavLink className='link' activeclassname="active" to="/cv"><FontAwesomeIcon icon={['fa', 'file-alt']} /> CV</NavLink>
                <NavLink className='link'  activeclassname="active" to="/skill"><FontAwesomeIcon icon={['fa', 'ruler']} /> Skills</NavLink>
                <NavLink className='link' activeclassname="active" to="/gists"><FontAwesomeIcon icon={['fa', 'pencil-alt']} /> Gists</NavLink>
                <NavLink className='link' activeclassname="active" to="/contact"><FontAwesomeIcon icon={['fa', 'envelope']} /> Contact</NavLink>
            </div>
        );
    }
}

export default Navigation;