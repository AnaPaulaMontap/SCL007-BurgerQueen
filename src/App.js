import React, { Component } from 'react';
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './componentes/nav-bar/nav-bar.js'
import menu from'./burguerQueen.json'
import Steward from './Steward'
import Kitchen from './Kitchen';


class App extends Component {
/*
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  } */
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar className="App-header"/>         
          <Switch>           
            <Route
              exact
              path="/Steward"
              render={() => <Steward menu={menu}/>} />
            <Route
              exact
              path="/Kitchen"
              render={() => <Kitchen/>} />                     
          <Redirect path="*" to="/Steward"></Redirect>      
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
