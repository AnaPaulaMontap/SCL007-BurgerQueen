import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//mport NavBar from './componentes/nav-bar/nav-bar.js'
import SplitPane from './componentes/columns/columnsPrice.js'
import Toogle from './componentes/buttons/menubutton.js'
import NameForm from './componentes/nameClient/nameClient.js'
import MenuBreakfast from './componentes/menuday/menu-breakfast.js'
import MenuDay from './componentes/menuday/menu-allday';
import {database} from './provider.js'


class Steward extends Component {
  constructor(props) {
    super(props)
    this.state = {
    isToggleOn: true,
    takeOrder:{
        order: false,
        orderD: false,
        nameClient:'',
        stateOrder:[],
        menuBreakfast: true,
        menuAllday: true,
        totalAccount: 0,
      },
    menuB: props.menu.menuDesayuno,
    menuD: props.menu.menuDia
  }
    
    this.handleChange= this.handleChange.bind(this); 
    this.handleClickDay = this.handleClickDay.bind(this); 
    this.handleClickBreakfast = this.handleClickBreakfast.bind(this); 
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFirebase = this.handleFirebase.bind(this);
    
  }

  handleChange(event){
    this.setState({
      ...this.state,
      takeOrder:{
        ...this.state.takeOrder,
        nameClient: event.target.value
      }});
  }
  
  handleClickDay(){
         this.setState({
        ...this.state,
        takeOrder:{
          ...this.state.takeOrder,
        menuBreakfast : false,
        menuAllday : false,
        orderD: this.state.menuD,
      }});
      
  }

handleClickBreakfast(){
    this.setState({
   ...this.state,
   takeOrder:{
     ...this.state.takeOrder,
   menuAllday : false,
   menuBreakfast : false,
   order: this.state.menuB
  }});
}

handleInputChange(event) {
  let name = event.target.getAttribute('product')
  let value = Number(event.target.getAttribute('value'))
  const newItem = []
 
 
  newItem.push({
    item: name,
    price: value
  })


  this.setState({
    ...this.state,
   takeOrder:{
     ...this.state.takeOrder,
    stateOrder: this.state.takeOrder.stateOrder.concat(newItem),
    totalAccount:  this.state.takeOrder.totalAccount + value,
    }
    
})
}

handleFirebase(){

  const order = {
   name: this.state.takeOrder.nameClient,
   order: this.state.takeOrder.stateOrder.map((itemOrder)=>{  
    return (itemOrder.item)
  }) 
  }; 
  
  var newPostKey = database.push().key;

  var updates = {};
  updates['BQKitchen/'+ newPostKey] = order;

 
  return database.update(updates);
}


render() {

  let order = this.state.takeOrder.stateOrder.map((itemOrder)=>{
  
    return <p> {itemOrder.item} ... {itemOrder.price}</p>
  }) 

    return (
      <div className="App">
       <NameForm
        onChange={this.handleChange}
        />
        <SplitPane
          left={  
            <div>
            <p>Resumen de Pedido</p>
            <p>Cliente:{' '}{this.state.takeOrder.nameClient.toLocaleUpperCase()}</p>  
            <p key={order}>{order}</p>
            <footer>
              <button className="App-buttons">Total: ${this.state.takeOrder.totalAccount}</button>
              <button className="App-buttons" onClick={this.handleFirebase}>Enviar a Cocina</button>               
            </footer>            
            </div>
          }  
          right={
            <div className="rightFlex">
            <Toogle toogleOn={this.state.takeOrder.menuBreakfast} onClick={this.handleClickBreakfast} children='Menú Desayuno'/>
            <Toogle toogleOn={this.state.takeOrder.menuAllday} onClick={this.handleClickDay} children='Menú del Día'/> 
            <MenuBreakfast object={this.state.takeOrder.order} onClickButtons={this.handleInputChange}/>  
            <MenuDay object={this.state.takeOrder.orderD} onClickButtons={this.handleInputChange} />  
            
            </div>
          }/>
            
        
          
       
      </div>
    );
  }
}

export default Steward;
