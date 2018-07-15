import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faEnvelope, faPencilAlt, faCalendarAlt, faRuler} from '@fortawesome/free-solid-svg-icons';

library.add(
    faHome,
    faEnvelope,
    faPencilAlt,
    faCalendarAlt,
    faRuler
  )

class Navigation extends Component {
    render() {
        return(
            <div>
                <div></div>
                <div>
                    <div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;