import React, { Component } from 'react';
import TreeChart from '../vis/tree-chart';
import skills from './skill-data/skill-data';
import './skill.css';

class Skill extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="skill-card">
                    <TreeChart data={skills}/>
        </div>
         );
    }
}
 
export default Skill;