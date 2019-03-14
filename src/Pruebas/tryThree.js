import React from 'react';
import './App.css';


function ListItem(props) {
    // Correcto! No hay necesidad de especificar la key aquí:
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correcto! La key debería ser especificada dentro del array.
      <ListItem key={number.toString()}
                value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }




export default NumberList