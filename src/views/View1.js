import React, { Component } from 'react';
import Component1 from '../components/components';

const liff = window.liff; 

export default class View1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName : '',
            userId : '',
            pictureUrl : '',
            statusMessage : ''
        };
    }

    componentDidMount() {
        window.addEventListener('load', this.initialize);
    }

    initialize = () => {
        liff.init(async (data) => {
          let profile = await liff.getProfile();
          this.setState({
            displayName : profile.displayName,
            userId : profile.userId,
            pictureUrl : profile.pictureUrl,
            statusMessage : profile.statusMessage
          });
        }); 
      }

    render() {
        
        console.log('liff', window.liff);
        return (
            <div>
                <h1>{this.state.displayName}</h1> <br />
                <h1>{this.state.userId}</h1> <br />
                <h1>{this.state.statusMessage}</h1> <br />
            </div>
        )
    }
} 