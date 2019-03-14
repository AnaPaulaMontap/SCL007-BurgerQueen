import React from 'react';
import './menu-day.css'


function MenuDay(props) {

  if (!props.object) {
    return null;
  }
  let arrMenu = Object.keys(props.object).map((key) => {
     const menuDay = props.object[key];
     return menuDay
  })
  
  let arrButtons = arrMenu.flat()

  return arrButtons.map((a) => {
    return <button className="buttonDay" onClick={props.onClickButtons} key={a.item} product={a.item} value={a.Precio} >{a.item}:{' '}{a.Precio}</button>
  })
  
}
 
 
        


    /*  Object.entries(props.object).map((i) => {
        console.log(props.object)
       let arrButtons = i[1]
     
       arrButtons.map((a)=>{
        //console.log(a.item, a.Precio)
         return <div></div>
       })
       
        return <div className="buttonDay" key={i[0]}>
        <p>{i[0]}</p>*/
      
  

export default MenuDay