import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import HelperKitchen from './compKitchen/helper';


class Kitchen extends Component {
    render(){
    return (
        <div className="App-header">
        <HelperKitchen/>
        </div>
    )
    }
}

export default Kitchen;
