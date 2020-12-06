import React, {Fragment} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faHome, faEnvelope, faPencilAlt, faCalendarAlt, faRuler, faFileAlt, faMobile, faAddressBook} from '@fortawesome/free-solid-svg-icons';
import Author from '../Author';

library.add(
    faHome,
    faEnvelope,
    faPencilAlt,
    faCalendarAlt,
    faRuler,
    faFileAlt,
    faMobile,
    faFacebook,
    faAddressBook
  )
const LeftPane = () => {

    const renderProfile = () => (
        <Fragment>
            <Author />
            {/* <img src={image} alt="Author" style={{width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto', marginTop: '10px', }}/> */}
            <div style={{color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", letterSpacing: '5px', marginTop: '5px'}}>VINEET KUMAR</div>
            <div style={{color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", letterSpacing: '1px', fontSize: '9px'}}>FULLSTACK DEVELOPER</div>
            <div>
                <div style={{padding: '1px', marginTop: '10px', marginLeft: '20px', background: 'antiquewhite', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                    <div style={{padding: '2px', background: 'black', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%'}}>
                        <FontAwesomeIcon style={{float: 'left', color: 'antiquewhite', fontSize: '12px'}} icon={['fa', 'home']} />
                    </div>
                    <span>PROFILE</span>
                </div>
                <div style={{float: 'left', marginTop: 10, marginLeft: '20px', textAlign: 'left', color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", fontWeight: '500', fontSize: '11px'}}>
                I am found of new technology to put myself on thin line of continuous progress, which gives great experience to manage my professional life. 
                </div>
            </div>
            
            <div>
                <div style={{position: 'relative', padding: '1px', marginTop: '10px', marginLeft: '20px', background: 'antiquewhite', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                    <div style={{padding: '2px', background: 'black', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%'}}>
                        <FontAwesomeIcon style={{float: 'left', color: 'antiquewhite', fontSize: '12px'}} icon={['fa', 'address-book']} />
                    </div>
                    <span>CONTACTS</span>
                </div>

                <div style={{marginLeft: '25px', display: 'flex', marginTop: 10}}>
                    <FontAwesomeIcon style={{float: 'left', color: 'antiquewhite', fontSize: '10px', position: 'relative', top: '5px'}} icon={['fa', 'envelope']} />
                    <span style={{textAlign: 'left', color: 'antiquewhite', fontSize: '12px', marginLeft: '10px'}}>Lotus Petals, B - 402, Doddakamanahalli Main Road</span>
                </div>

                <div style={{marginLeft: '25px', display: 'flex'}}>
                    <FontAwesomeIcon style={{float: 'left', color: 'antiquewhite', fontSize: '10px', position: 'relative', top: '5px'}} icon={['fa', 'mobile']} />
                    <span style={{textAlign: 'left', color: 'antiquewhite', fontSize: '12px', marginLeft: '10px'}}>+91 - 9910375511</span>
                </div>

                <div style={{marginLeft: '25px', display: 'flex'}}>
                    <FontAwesomeIcon style={{float: 'left', color: 'antiquewhite', fontSize: '10px', position: 'relative', top: '5px'}} icon={['fab', 'facebook']} />
                    <span style={{textAlign: 'left', color: 'antiquewhite', fontSize: '12px', marginLeft: '10px'}}>vineetkumar87</span>
                </div>
            </div>
            
            <div>
                <div style={{padding: '1px', marginTop: '10px', marginLeft: '20px', background: 'antiquewhite', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                    <div style={{padding: '2px', background: 'black', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%'}}>
                        <FontAwesomeIcon style={{float: 'left', color: 'antiquewhite', fontSize: '12px'}} icon={['fa', 'pencil-alt']} />
                    </div>
                    <span>PRO SKILLS</span>
                </div>
                <div style={{width: '88%', marginTop: 10, float: 'left', marginLeft: '25px', textAlign: 'left', color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", fontWeight: '100', fontSize: '11px'}}>
                    <div style={{width: '100%', fontWeight: 500}}>
                        <span>Java</span>
                        <div style={{width: '100%', height: '2px', background: 'white'}}></div>
                        <div style={{width: '90%', height: '2px', background: '#575656', position: 'relative', top: '-2px'}} ></div>
                    </div>

                    <div style={{width: '100%', fontWeight: 500}}>
                        <span>Data Structure</span>
                        <div style={{width: '100%', height: '2px', background: 'white'}}></div>
                        <div style={{width: '70%', height: '2px', background: '#575656', position: 'relative', top: '-2px'}} ></div>
                    </div>

                    <div style={{width: '100%', fontWeight: 500}}>
                        <span>JavaScript</span>
                        <div style={{width: '100%', height: '2px', background: 'white'}}></div>
                        <div style={{width: '80%', height: '2px', background: '#575656', position: 'relative', top: '-2px'}} ></div>
                    </div>

                    <div style={{width: '100%', fontWeight: 500}}>
                        <span>ReactJS</span>
                        <div style={{width: '100%', height: '2px', background: 'white'}}></div>
                        <div style={{width: '85%', height: '2px', background: '#575656', position: 'relative', top: '-2px'}} ></div>
                    </div>

                    <div style={{width: '100%', fontWeight: 500}}>
                        <span>Spring Boot</span>
                        <div style={{width: '100%', height: '2px', background: 'white'}}></div>
                        <div style={{width: '90%', height: '2px', background: '#575656', position: 'relative', top: '-2px'}} ></div>
                    </div>
                    
                    <div style={{width: '100%', fontWeight: 500}}>
                        <span>Python</span>
                        <div style={{width: '100%', height: '2px', background: 'white'}}></div>
                        <div style={{width: '90%', height: '2px', background: '#575656', position: 'relative', top: '-2px'}} ></div>
                    </div>
                </div>
            </div>

            <div>
                <div style={{padding: '1px', marginTop: '10px', marginLeft: '20px', background: 'antiquewhite', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                    <div style={{padding: '2px', background: 'black', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%'}}>
                        <FontAwesomeIcon style={{float: 'left', color: 'antiquewhite', fontSize: '12px'}} icon={['fa', 'home']} />
                    </div>
                    <span>Language</span>
                </div>
                <div style={{float: 'left', marginTop: 10, marginLeft: '25px', textAlign: 'left', color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", fontWeight: '500', fontSize: '11px'}}>
                    Hindi, English, Sanskrit
                </div>
            </div>
            
        </Fragment>
    )

    return (
        <div style={{width: '20%', minWidth: 250, height: '100%', background: '#181919', display: 'flex', flexDirection: 'column', overflowY: 'auto', float: 'left'}}>
            {renderProfile()}
        </div>
    );
}

export default LeftPane;