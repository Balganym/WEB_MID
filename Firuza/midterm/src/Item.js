import React, { Component } from 'react';
import ItemList from './ItemList'


class Item extends Component{
 constructor(props){
  super(props);

  // this.state = {
  //  "items": []
  // }

  // this.setState(){
  // 	items:["Home", "About", "Contact"]
  // }

  this.state = {
   items: ["Home", "About", "Contact"]
  }

 }


 render(){
   return(
    
    <div className='items'> {
     this.state.items.map((item, i) => {
       return <ItemList key={i} name={item}/> 
      })
    }
    </div>

   );
  }
 }

export default Item;