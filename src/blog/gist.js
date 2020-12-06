import './gist.css';
import React, {useState, useEffect} from 'react';
import API from '../api/v-api';
import Gi from 'super-react-gist';
import image from '../images/noconnection.png';

const Gist = () => {

    const [gists, setGist] = useState([]);
    const [connection, setConnection] = useState(false);
    
    useEffect(() => {
        const fetchGists = async () => {
            try {
                const result = await API.get('/gists');
                setGist(result.data);
                setConnection(true);
            } catch(err) {
                setConnection(false);
            }
        }
        fetchGists();
    }, [])

    const renderGistList = () => connection ? (
        gists.map(gist => (
            <div key={gist.id} style={{width: '90%', margin: '0 auto'}}>
                <div style={{background: '#333333', color: '#FFFFFF', position: 'relative', top: 2, fontFamily: 'cursive', padding: 10, borderTopLeftRadius: 5, borderTopRightRadius: 5}}>{gist.description}</div>
                <Gi url={`https://gist.github.com/vineetkse/${gist.id}`} />
            </div>
         ))
    ) : (<div><div style={{backgroundImage: `url(${image})`}}></div>No Connection</div>);

    return (
        <div className='gist-ui-wrapper'>
            {/* <div style={{fontWeight: 300, color: 'antiquewhite', fontSize: 30, marginBottom: 20}}><span>Number of Gists: </span>
             <Spring
              from={{ number: 0 }}
              to={{ number: gists.length }}>
              {props => <span>{props.number.toFixed()}</span>}
            </Spring></div> */}
            {renderGistList()}
        </div>
    );
};

export default Gist;