import React, { Component } from 'react';
import Spinner from '../spinner/spinner';

import './home.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            showSpinner: 'show',
            codeletters: "01",
            message: 0,
            current_length: 0,
            fadeBuffer: false,
            messages: [
                'Software Developer',
                "UI Developer"
            ]
        };
    }

    componentDidMount() {
        this.setState({
            showSpinner: 'hide'
        });

        setTimeout(() => this.animateIn(), 100);
    }

    randomText(length) {
        let random = '';
        while(random.length < length) {
            random += this.state.codeletters.charAt(Math.floor(Math.random() * this.state.codeletters.length));
        }

        return random;
    }
      
      generateRandomString(length){
        var random_text = '';
        while(random_text.length < length){
          random_text += this.state.codeletters.charAt(Math.floor(Math.random() * this.state.codeletters.length));
        } 
        
        return random_text;
      };
      
      animateIn(){
        if(this.state.current_length < this.state.messages[this.state.message].length){
          this.setState({current_length: this.state.current_length + 2});
          if(this.state.current_length > this.state.messages[this.state.message].length) {
            this.setState({current_length: this.state.messages[this.state.message].length});
          }
          
          var message = this.generateRandomString(this.state.current_length);
          this.refs.rotatingTextNode.innerHTML = message;
          
          setTimeout(() => {this.animateIn();}, 20);
        } else { 
          setTimeout(() => {this.animateFadeBuffer();}, 20);
        }
      };
      
      animateFadeBuffer(){
        if(this.state.fadeBuffer === false){
            this.state.fadeBuffer = [];
          for(var i = 0; i < this.state.messages[this.state.message].length; i++){
            this.state.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: this.state.messages[this.state.message].charAt(i)});
          }
        }
        
        var do_cycles = false;
        var message = ''; 
        
        for(var i = 0; i < this.state.fadeBuffer.length; i++){
          var fader = this.state.fadeBuffer[i];
          if(fader.c > 0){
            do_cycles = true;
            fader.c--;
            message += this.state.codeletters.charAt(Math.floor(Math.random()*this.state.codeletters.length));
          } else {
            message += fader.l;
          }
        }
        
        this.refs.rotatingTextNode.innerHTML = message;
        
        if(do_cycles === true){
          setTimeout(() => {this.animateFadeBuffer();}, 50);
        } else {
          setTimeout(()=> {this.cycleText();}, 2000);
        }
      };
      
      cycleText(){
        this.state.message = this.state.message + 1;
        if(this.state.message >= this.state.messages.length){
            this.state.message = 0;
        }
        
        this.state.current_length = 0;
        this.state.fadeBuffer = false;
        this.refs.rotatingTextNode.innerHTML = '';
        
        setTimeout(() => {this.animateIn(); }, 200);
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
                <span className='home-text-rotate'><span>I'm </span><span ref='rotatingTextNode'></span></span>
            </div>
        );
    }
}

export default Home;