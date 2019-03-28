import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css';
import logo1 from '../imagenes/BQ.png'


  function NavBar (props) {
      return (
          
          <div className="nav">
            <Link to="/Steward" className="nav-button">TOMA DE PEDIDOS</Link>
            <img className="logo" src={logo1} alt="logo1"></img>          
            <Link to="/Kitchen" className="nav-button">COCINA</Link>
          </div>
          
       
      );
    
  }
     

  export default NavBar