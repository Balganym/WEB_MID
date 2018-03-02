import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [
        {id: 0, name: "Home", color: "white", col: "black"},
        {id: 1, name: "About", color: "white", col: "black"},
        {id: 2, name: "Contact", color: "white", col: "black"}
      ],
      second: [
        {id: 0, name: "first", price: 120, color: "white", col: "black"},
        {id: 1, name: "second", price: 220, color: "white", col: "black"},
        {id: 2, name: "third", price: 320, color: "white", col: "black"},
        {id: 3, name: "fourth", price: 420, color: "white", col: "black"},
        {id: 4, name: "fifth", price: 520, color: "white", col: "black"}
      ],
      total: 0.0,
    }
  }

  handleButtonClick = (id) =>{
    var arr = this.state.items;

    arr.map(i => {
      if(i.id === id){
        i.color = "blue";
        i.col = "white";
      }else{
        i.color = "white";
        i.col = "black";
      }
    })

    this.setState({
      items: arr
    })
  }

  handleRowClick = (id) =>{
    var arr = this.state.second;
    var tot = this.state.total;
    arr.map(i => {
      if(i.id === id){
        if(i.color === "blue"){
          tot -= i.price;
          i.color = "white";
          i.col = "black";
        }else{
          tot += i.price;
          i.color = "blue";
          i.col = "white";
        }
      }
    })

    this.setState({
      second: arr,
      total: tot
    })
  }

  render() {
    return (
      <div className="page">
        <div className = "App">
          {this.state.items.map(i => {
            return (<Button key={i.id} button={i} 
              onButtonClick={this.handleButtonClick}/>)
          })}
        </div>
        <br/>
        <div className = "box">
          <h3>Products</h3>
          <div className="box">
            {this.state.second.map(s => {
              return(<Row key={s.id} row={s} onButtonClick={this.handleRowClick} />)
            })}
          </div>
          <div class="center">Total: {this.state.total}</div>
          </div>
      </div>
    );
  }
}

class Row extends Component {

  handleClick = () => {
    this.props.onButtonClick(this.props.row.id)
  }

  render(){
    return(
      <div className="row" style={{backgroundColor: this.props.row.color,
        color: this.props.row.col}} onClick={this.handleClick}>
        <p>{this.props.row.name} {this.props.row.price}tg</p>
      </div>
    )
  }
}

class Button extends Component {

  handleClick = () => {
    this.props.onButtonClick(this.props.button.id)
  }

  render(){
    return(
      <div style={{backgroundColor: this.props.button.color,
        color: this.props.button.col}} 
        className="button" onClick={this.handleClick}>
          {this.props.button.name}
      </div>
    )
  }
}

export default App;










