import React, {Component} from 'react'
import {database} from '../provider.js'
import './helpers.css'

class HelperKitchen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderKitchen: [],
      nameOrder: [],
      itemOrder: [],
    }
  
  }

  componentDidMount() {
    database.child('BQKitchen').on('value', (snapshot) => {
      let key = snapshot.val();
      const arrOrderComplete = [];
      for (let read in key) {
          arrOrderComplete.push(key[read])
      }
      this.setState({
        ...this.state,
        orderKitchen: arrOrderComplete
      },()=>{
        let arrName = this.state.orderKitchen.map((itemOrder) => {
          return (itemOrder.name)
        })
        let arrOrder = this.state.orderKitchen.map((itemOrder) => {
          return (itemOrder.order)
        })
        
        this.setState({
          ...this.state,
          nameOrder: this.state.nameOrder.concat(arrName),
          itemOrder: this.state.itemOrder.concat(arrOrder),
        });
        console.log(arrOrderComplete)
      })
    }); 

    
  }
  render() {

    let listOrder = this.state.itemOrder.flat().map((item)=>{
      return (<li>{item}</li>)
    })

    return (       
      <div className = "orderKitchen" key={this.state.nameOrder}>
        <p> Nombre: {this.state.nameOrder} </p>
        <p> Item:</p>
        <ul>{listOrder}</ul>
      </div>
    )

  }
}
export default HelperKitchen




/*
function HelperKitchen(){  
  
 database.once('value', (snapshot) => {
  const orderKitchen=[];
  let snapKey = snapshot.val();
      for (let read in snapKey){
          orderKitchen.push(snapKey[read])
      }  

   orderKitchen.map((itemOrder) => {
       
        let name = itemOrder.name  
        let order = itemOrder.order   

        return console.log(name,order)
      })
    });

    return(
      <div className="orderKitchen">
      <p>Nombre:</p>
      <p>Item:</p>
      </div>
    )
      

} */