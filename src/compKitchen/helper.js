import React, {Component} from 'react'
import {database} from '../provider.js'
import './helpers.css'

class HelperKitchen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderKitchen: [],
      orderReady: false,
    }

    this.handleClickChange = this.handleClickChange.bind(this);  
  }

  componentDidMount () {
    database.child('BQKitchen').on('value', (snapshot) => {
      let key = snapshot.val();
      console.log(snapshot.val())
      const arrOrderComplete = [];
      for (let read in key) {
          let item = key[read]
          item.id = read
          arrOrderComplete.push(item)
      }
      this.setState({
        ...this.state,
        orderKitchen: arrOrderComplete
      }, ()=>{
        console.log(this.state.orderKitchen)
      })
      
    }); 
  }

    handleClickChange (props) {

    window.confirm("El pedido esta completo?") &&
    
      database.child('BQKitchen').child(props.id).update({state:true})
    
  }

  render() {

    let nameOrder = this.state.orderKitchen.map((item)=>{
      return (
      <div onClick={() => this.handleClickChange(item)} className ="orderKitchen" key={item.id} style={{display: item.state ? 'none' : 'block'}}>
      <p> Nombre: <strong>{item.name}</strong></p>
      <p> Item:</p>
      <ul>
        {item.order.map((list,i)=>{
          return (<li key={i}>{list}</li>)
        })}
        </ul>
    </div>)
    })
   
    return ( 
      
      
      <div >
        {nameOrder}
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

/*,()=>{
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
        },() =>{
        console.log(arrOrderComplete)
        console.log(this.state.nameOrder)
        console.log(this.state.itemOrder)
        }); */