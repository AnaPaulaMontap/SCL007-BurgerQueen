import React from 'react';
import './nameClient.css'


function NameForm (props) {
      return (
        <div className="Client col">     
          <form>
          <label>
            Atendiendo a: 
            <input type="text" onChange={props.onChange}/>
          </label>
        </form>
        </div>
      );
    }
  
  
  
export default NameForm