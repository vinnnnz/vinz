import React, {Fragment} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faHome, faEnvelope, faSchool, faUserTie, faCaretSquareDown, faRuler, faFileAlt, faMobile, faAddressBook} from '@fortawesome/free-solid-svg-icons';

library.add(
    faHome,
    faEnvelope,
    faSchool,
    faCaretSquareDown,
    faRuler,
    faFileAlt,
    faMobile,
    faFacebook,
    faAddressBook,
    faUserTie
  )

const renderRightPane = () => (
    <Fragment>
        <div>
            <div style={{padding: '1px', marginTop: '10px', marginLeft: '20px', background: '#181919', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                <div style={{padding: '2px', background: 'antiquewhite', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%'}}>
                    <FontAwesomeIcon style={{float: 'left', color: '#181919', fontSize: '12px'}} icon={['fa', 'user-tie']} />
                </div>
                <span style={{color: 'antiquewhite', textAlign: "left", display: 'block', marginLeft: 40}}>EXPERIENCE</span>
            </div>
            <div style={{float: 'left', marginTop: 10, marginLeft: '25px', textAlign: 'left', color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", fontWeight: '100', fontSize: '11px'}}>
                Hindi, English
            </div>
        </div>

        <div style={{clear: 'both'}}>
            <div style={{padding: '1px', marginTop: '10px', marginLeft: '20px', background: '#181919', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                <div style={{padding: '2px', background: 'antiquewhite', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%'}}>
                    <FontAwesomeIcon style={{float: 'left', color: '#181919', fontSize: '12px'}} icon={['fa', 'school']} />
                </div>
                <span style={{color: 'antiquewhite', textAlign: "left", display: 'block', marginLeft: 40}}>EDUCATION</span>
            </div>
            <div style={{float: 'left', marginTop: 10, marginLeft: '25px', textAlign: 'left', color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", fontWeight: '100', fontSize: '11px'}}>
                Hindi, English
            </div>
        </div>

        <div style={{clear: 'both'}}>
            <div style={{padding: '1px', marginTop: '10px', marginLeft: '20px', background: '#181919', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                <div style={{padding: '2px', background: 'antiquewhite', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%'}}>
                    <FontAwesomeIcon style={{float: 'left', color: '#181919', fontSize: '12px'}} icon={['fa', 'user-tie']} />
                </div>
                <span style={{color: 'antiquewhite', textAlign: "left", display: 'block', marginLeft: 40}}>CERTIFICATIONS</span>
            </div>
            <div style={{float: 'left', marginTop: 10, marginLeft: '25px', textAlign: 'left', color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", fontWeight: '100', fontSize: '11px'}}>
                Hindi, English
            </div>
        </div>

        <div style={{clear: 'both'}}>
            <div style={{padding: '1px', marginTop: '10px', marginLeft: '20px', background: '#181919', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                <div style={{padding: '2px', background: 'antiquewhite', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%'}}>
                    <FontAwesomeIcon style={{float: 'left', color: '#181919', fontSize: '12px'}} icon={['fa', 'caret-square-down']} />
                </div>
                <span style={{color: 'antiquewhite', textAlign: "left", display: 'block', marginLeft: 40}}>INTERESTS</span>
            </div>
            <div style={{float: 'left', marginTop: 10, marginLeft: '25px', textAlign: 'left', color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", fontWeight: '100', fontSize: '11px'}}>
                Hindi, English
            </div>
        </div>
    </Fragment>
);

const RightPane = () => {
    return (
        <div className="rightPane" style={{width: '75%', marginLeft: 20, float: 'right'}}>
            {renderRightPane()}
        </div>
    );
}

export default RightPane;