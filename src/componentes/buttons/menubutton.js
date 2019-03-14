import React from 'react';
import './menubuttons.css'


function Toogle(props){
  if(props.toogleOn){
    return (
      <button onClick={()=>props.onClick(props.children)} className="buttonsMenu">{props.children}</button>
      );
  }
  else{
    return null
  }
}

export default Toogle