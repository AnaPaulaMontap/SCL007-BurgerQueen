import React, {Component} from 'react';
import {database} from '../../provider.js'
import './ordenready.css'


class OrderReady extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderReady: false,
            orden:[],
          };
    
        this.seeFirebase = this.seeFirebase.bind(this); 
        this.handleChangeState = this.handleChangeState.bind(this); 
        this.updateFirebase = this.updateFirebase.bind(this);
      }    

      handleChangeState(){
        this.setState({
            ...this.state,
            orderReady: !this.state.orderReady,
          }, ()=>{
            console.log(this.state.orderReady) 
          })

          return this.seeFirebase()  
      }
    
      seeFirebase() {

        database.child('BQKitchen').orderByChild('state').equalTo(true).once('value',(snapshot) => {
            console.log(snapshot.val())
            
                let childData = snapshot.val();
                const arrOrderReady = [];
                for (let value in childData) {
                    let item = childData[value]
                    item.id = value
                    arrOrderReady.push(item)
                }  
                this.setState({
                    ...this.state,
                    orden: arrOrderReady,
                  }, ()=>{
                    console.log(this.state.orden)
                  })                 
                });    
      }

      updateFirebase(props) {

        window.confirm("El pedido fue entregado?") &&
        
          database.child('BQKitchen').child(props.id).update({delivery:true})
        
      
            
    }

    render() {  
        let itemOrder = this.state.orden.map((item)=>{
            return (

         <div className='orderReady' onClick={()=>this.updateFirebase(item)} key={item.id} style={{display: item.delivery ? 'none' : 'block'}}>
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
        <div className='col'>
        <div className="order" onClick={this.handleChangeState}>     
        <p>Ver Pedidos Listos</p>
        </div>
        {this.state.orderReady && 
        <div className='itemOrder'> {itemOrder}</div>}
        
      </div>
      );
    }
};
  
  
  
export default OrderReady