import React from 'react';
import './menu-day.css'


function MenuBreakfast(props) { 

return (
  <div>
  {props.object && 
    props.object.map((i) => {
      return <button onClick={props.onClickButtons} className="buttonFood" key={i.item} product={i.item} value={i.Precio} >{i.item}:{i.Precio}</button>
  })}
  
  </div>
);
}


/*
  if(props.object){
 
    for(let i of props.object){

     buttons = <button onClick={props.onClick} className="buttonFood" key={i.item} value={i.item}>{i.item}:{i.Precio}</button>
     
    }
  
  }
  console.log(buttons)
  return buttons
  }

 
 
 
 
 (
   { objectArr && (

   for (let i of objectArr){
     
      <button onClick={props.onClick} className="buttonFood" key={i.item} value={i.item}>{i.item} : {i.Precio}</button>
      
   })});
  }

  const items = props.object.map((item) =>{
    return (
      <button onClick={props.onClick} className="buttonFood" key={item} value={item}> {item}</button>
      )
    })
   return items */
 


export default MenuBreakfast 

/*
class MenuDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: true,
      amount: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(props) {
      if(props.object){
        const items = props.object.map((item) =>{
          return (
              <form>
                <label>
                  {item}
                  <input
                    name={item}
                    type="checkbox"
                    checked={this.state.item}
                    onChange={()=> props.onChange(item)}/>
                </label>
                <label>
                  Cantidad:
                  <input
                    name="cantidad"
                    type="number"
                    value={this.state.amount}
                    onChange={()=> props.onChange(item)}/>
                </label>
              </form>
            )
          })
          return items
        }
        else{
          return null
        } 
      }
    
  }


export default MenuDay  */