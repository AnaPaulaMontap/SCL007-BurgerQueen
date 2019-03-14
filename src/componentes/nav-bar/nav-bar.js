import React, { Component }  from 'react';
import './nav-bar.css';

class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <div className="nav" >
         <button className="nav-button" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'TOMA DE PEDIDOS' : 'COCINA'}
        </button>
      </div>
      );
    }
  }

  export default NavBar