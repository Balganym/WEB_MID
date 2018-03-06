/*
* @Author: bobur554395
* @Date:   2018-01-23 14:46:11
* @Last Modified by:   bobur554395
* @Last Modified time: 2018-01-23 15:30:02
*/
import React, { Component } from 'react';

class ToDo extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      items: [],
      inputValue: ''
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  inputChanged(event){
    this.setState({
      inputValue: event.target.value 
    });
  }

  buttonClicked(){
    // let arr = this.state.items;
    // arr.push(this.state.inputValue);

    this.setState({
      items: [...this.state.items, this.state.inputValue],
      inputValue: ''
    });
  }

  deleteItem(_index){
    this.setState({
      items: this.state.items.filter((item, index) => index !== _index) 
    });
  }

  editItem(index){
          
  }

  render() {
    return (
      <div className="form">
        <h2>ToDoList</h2>
        <input value={this.state.inputValue} onChange={this.inputChanged} />
        <button className="addButton" onClick={this.buttonClicked}>Add item</button>

          <ul className="list">
          {
            this.state.items.map((item, index) =>
              <li key={index}>
                  {item}
                   <button className="button" onClick={this.editItem.bind(this, index)}>Edit</button>
                   <button className="button" onClick={this.deleteItem.bind(this, index)}>Delete</button>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}


export default ToDo;