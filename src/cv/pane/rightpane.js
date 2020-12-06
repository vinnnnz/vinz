import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faSchool, faUserTie, faCaretSquareDown, faRuler, faFileAlt, faMobile, faAddressBook } from '@fortawesome/free-solid-svg-icons';

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
            <div style={{ padding: '1px', marginTop: '10px', marginLeft: '20px', background: '#181919', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                <div style={{ padding: '2px', background: 'antiquewhite', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%' }}>
                    <FontAwesomeIcon style={{ float: 'left', color: '#181919', fontSize: '12px' }} icon={['fa', 'user-tie']} />
                </div>
                <span style={{ color: 'antiquewhite', textAlign: "left", display: 'block', marginLeft: 40 }}>EXPERIENCE</span>
            </div>

            <div style={{ float: 'left', marginTop: 10, marginLeft: '25px', textAlign: 'left', color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", fontWeight: '100', fontSize: '11px' }}>
                <div style={{ color: 'black', fontWeight: 'bold' }}>Senior Software Engineer</div>
                <div style={{ color: 'black', fontWeight: 'bold' }}>LOWE'S India (Supply Chain)</div>
                <div style={{ color: '#777', fontWeight: 'bold', fontStyle: 'italic' }}>08/2020 - Present</div>
                <div style={{ color: '#444', fontWeight: 'bold', fontStyle: 'italic' }}>Achievements/Tasks</div>
                <ul style={{ listStyleType: "square", color: 'black', fontWeight: 'bold' }}>
                    <li>Learned new technology and implemented quickly in the project</li>
                    <li>Migrated old monolithic API to cloud using docker, kubernetes and GCS</li>
                    <li>Developed UI using reactjs from scratch with redux and redux-saga to manage application state</li>
                    <li>Developed API using Java version 8 and Spring Boot framework.</li>
                    <li>Implement OAuth and in few applications basic auth to provide better security</li>
                    <li>Developed scheduler to process data from DB2 and posting it to another API</li>
                    <li>Implemented kafka broker in the spring boot application.</li>
                </ul>

                <div style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>Staff Software Engineer</div>
                <div style={{ color: 'black', fontWeight: 'bold' }}>Altimetrik Corp.(Client - Intuit)</div>
                <div style={{ color: '#777', fontWeight: 'bold', fontStyle: 'italic' }}>09/2017 - 07/2020</div>
                <div style={{ color: '#444', fontWeight: 'bold', fontStyle: 'italic' }}>Achievements/Tasks</div>
                <ul style={{ listStyleType: "square", color: 'black', fontWeight: 'bold' }}>
                    <li>Learned new technology and implemented quickly in the project</li>
                    <li>Migrated old monolithic API to cloud using docker, kubernetes and AWS</li>
                    <li>Developed UI using reactjs from scratch with redux and redux-saga to manage application state</li>
                    <li>Developed API using Java version 8 and Spring Boot framework.</li>
                    <li>Implemented kill switch for UI features using LaunchDarkly</li>
                    <li>A/B testing for UI features using Intuit AB testing library</li>
                    <li>Deployed application on AWS using cloud formation template</li>
                </ul>

                <div style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>Senior Software Engineer</div>
                <div style={{ color: 'black', fontWeight: 'bold' }}>Trigent Software Inc.(Client - XCira LLC & HDFleet)</div>
                <div style={{ color: '#777', fontWeight: 'bold', fontStyle: 'italic' }}>08/2015 - 09/2017</div>
                <div style={{ color: '#444', fontWeight: 'bold', fontStyle: 'italic' }}>Achievements/Tasks</div>
                <ul style={{ listStyleType: "square", color: 'black', fontWeight: 'bold' }}>
                    <li>Learned new technology and implemented quickly in the project</li>
                    <li>Developed UI using Angular(verion - 2 and 4) and DOJO toolkit.</li>
                    <li>Developed API using Java version 8 and Spring Boot framework.</li>
                </ul>

                <div style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>Software Engineer</div>
                <div style={{ color: 'black', fontWeight: 'bold' }}>IBM India (BBC & Airtel)</div>
                <div style={{ color: '#777', fontWeight: 'bold', fontStyle: 'italic' }}>08/2012 - 05/2015</div>
                <div style={{ color: '#444', fontWeight: 'bold', fontStyle: 'italic' }}>Achievements/Tasks</div>
                <ul style={{ listStyleType: "square", color: 'black', fontWeight: 'bold' }}>
                    <li>Learned new technology and implemented quickly in the project</li>
                    <li>Developed UI using DOJO toolkit.</li>
                    <li>Developed application using apache camel.</li>
                    <li>Developed backend application using spring framework version 3.0 and DB2</li>
                </ul>
            </div>
        </div>

        <div style={{ clear: 'both' }}>
            <div style={{ padding: '1px', marginTop: '10px', marginLeft: '20px', background: '#181919', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                <div style={{ padding: '2px', background: 'antiquewhite', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%' }}>
                    <FontAwesomeIcon style={{ float: 'left', color: '#181919', fontSize: '12px' }} icon={['fa', 'school']} />
                </div>
                <span style={{ color: 'antiquewhite', textAlign: "left", display: 'block', marginLeft: 40 }}>EDUCATION</span>
            </div>
            <div style={{ marginTop: 10, marginLeft: '25px', textAlign: 'left', color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", fontWeight: '100', fontSize: '11px' }}>
                <div style={{ color: 'black', fontWeight: 'bold' }}>
                    <div>M.Tech</div>
                    <div>BITS Pilani (Data Science and Engineering)</div>
                    <div style={{ fontStyle: 'italic', color: '#666', display: 'flex', width: '100%' }}>
                        <div>03/2020 - Present</div>
                        <div style={{ marginLeft: 'auto' }}>Bangalore</div>
                    </div>
                </div>
                <div style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>
                    <div>MCA</div>
                    <div>SASTRA University</div>
                    <div style={{ fontStyle: 'italic', color: '#666', display: 'flex', width: '100%' }}>
                        <div>06/2009 - 05/2012</div>
                        <div style={{ marginLeft: 'auto' }}>Thanjavur, Tamilnadu</div>
                    </div>
                </div>

                <div style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>
                    <div>BCA</div>
                    <div>Sikkim Manipal University</div>
                    <div style={{ fontStyle: 'italic', color: '#666', display: 'flex', width: '100%' }}>
                        <div>02/2005 - 05/2008</div>
                        <div style={{ marginLeft: 'auto' }}>Patna, Bihar</div>
                    </div>
                </div>

                <div style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>
                    <div>10+2</div>
                    <div>S.N. Sinha College</div>
                    <div style={{ fontStyle: 'italic', color: '#666', display: 'flex', width: '100%' }}>
                        <div>02/2004 - 03/2005</div>
                        <div style={{ marginLeft: 'auto' }}>Aurangabad, Bihar</div>
                    </div>
                </div>

                <div style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>
                    <div>10th</div>
                    <div>Anugrah Narayan Inter College</div>
                    <div style={{ fontStyle: 'italic', color: '#666', display: 'flex', width: '100%' }}>
                        <div>02/2001 - 03/2002</div>
                        <div style={{ marginLeft: 'auto' }}>Aurangabad, Bihar</div>
                    </div>
                </div>
            </div>
        </div>

        <div style={{ clear: 'both' }}>
            <div style={{ padding: '1px', marginTop: '10px', marginLeft: '20px', background: '#181919', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                <div style={{ padding: '2px', background: 'antiquewhite', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%' }}>
                    <FontAwesomeIcon style={{ float: 'left', color: '#181919', fontSize: '12px' }} icon={['fa', 'user-tie']} />
                </div>
                <span style={{ color: 'antiquewhite', textAlign: "left", display: 'block', marginLeft: 40 }}>CERTIFICATIONS</span>
            </div>
            <div style={{ float: 'left', marginTop: 10, marginLeft: '25px', textAlign: 'left', color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", fontWeight: '100', fontSize: '11px' }}>
                <div style={{ color: 'black', fontWeight: 'bold', marginBottom: 10 }}>OCJP 6, MongoDB</div>
            </div>
        </div>

        <div style={{ clear: 'both' }}>
            <div style={{ padding: '1px', marginTop: '10px', marginLeft: '20px', background: '#181919', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                <div style={{ padding: '2px', background: 'antiquewhite', width: '18px', height: '18px', display: 'inline-block', float: 'left', borderRadius: '50%' }}>
                    <FontAwesomeIcon style={{ float: 'left', color: '#181919', fontSize: '12px' }} icon={['fa', 'caret-square-down']} />
                </div>
                <span style={{ color: 'antiquewhite', textAlign: "left", display: 'block', marginLeft: 40 }}>INTERESTS</span>
            </div>
            <div style={{ float: 'left', marginTop: 10, marginLeft: '25px', textAlign: 'left', color: 'antiquewhite', fontFamily: "'Raleway', sans-serif", fontWeight: '100', fontSize: '11px' }}>
                <div style={{ color: 'black', fontWeight: 'bold', marginBottom: 20 }}>Learning Technologies, Cricket, Cooking</div>
            </div>
        </div>
    </Fragment>
);

const RightPane = () => {
    return (
        <div className="rightPane" style={{ width: '80%', minWidth: 450, marginLeft: 20, float: 'right', padding: 15, overflowY: 'auto' }}>
            {renderRightPane()}
        </div>
    );
}

export default RightPane;