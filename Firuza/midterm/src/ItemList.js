import React, { Component } from 'react';
import Item from './Item'

class ItemList extends Component {
    constructor(){
        super()

        this.state = {
           isACtive: false
        }
    }

    buttonIsClicked = () => {
        this.setState({
            isACtive: true
        })
    }

    render(){
        
        if(this.state.isACtive){
            return(
                <div className='blue' onClick={this.buttonIsClicked}> {this.props.name} </div>
                )
        }else{
            return(
                <div className='white' onClick={this.buttonIsClicked}> {this.props.name} </div>
              )
        }
    }
  }

export default ItemList;