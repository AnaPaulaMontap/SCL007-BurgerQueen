import React from 'react'
import  {database} from '../provider.js'
import './helpers.css'

/*
class HelperKitchen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderKitchen: [],
      nameOrder:[],
      itemOrder:[],
    }

    this.componentDidmount = this.componentDidmount.bind(this);
  }

componentDidmount() {

 database.child('BQKitchen').once('value', (snapshot) => {
      let key = snapshot.val();
      for (let read in key){
        this.setState({
          ...this.state,
          orderKitchen: this.state.orderKitchen.push(key[read])
        })
      }
    }),
  
    this.setState({
      ...this.state,
      nameOrder: this.state.nameOrder.push(this.state.orderKitchen.map((itemOrder) => {
        return (itemOrder.name)
      })),
      itemOrder: this.state.itemOrder.push(this.state.orderKitchen.map((itemOrder) => {
        return (itemOrder.order)
      }))
    }),
  }

  render(){ 
   return(
    <div className="orderKitchen">
    <p>Nombre:{this.state.nameOrder}</p>
    <p>Item:{this.setState.itemOrder}</p>
    </div>
    ) 

}
}
*/
function HelperKitchen(){  
  
 database.child('BQKitchen').once('value', (snapshot) => {
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
      

}
export default HelperKitchen


