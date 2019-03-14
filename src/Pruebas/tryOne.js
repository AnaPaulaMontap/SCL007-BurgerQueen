import React, { Component } from 'react';
import './App.css';


class Welcome extends Component {  
    render() {
      return <h1 className="App"> Hello, {this.props.name}</h1>
     
    }
  }

 export default Welcome; 