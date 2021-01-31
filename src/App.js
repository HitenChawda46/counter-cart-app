import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters'
import NavBar from './components/navbar'

class App extends Component {
  state = { 
    items : [
        {id:1,name:'Pizza',price:0,count:0,basePrice:99},
        {id:2,name:'Burger',price:0,count:0,basePrice:55},
        {id:3,name:'Pizza puff',price:0,count:0,basePrice:45},
        {id:4,name:'Burger king',price:0,count:0,basePrice:99},
    ],
  }
  handleIncrement = (item) => {
      const index = this.state.items.indexOf(item)
      const items = [...this.state.items]
      items[index].count++;
      items[index].price = items[index].basePrice *  items[index].count
      console.log(items[index].price)
      this.setState({items})
  }
  handleDecrement = (item) => {
      const index = this.state.items.indexOf(item)
      const items = [...this.state.items]
      if(items[index].count > 0){
          items[index].count--;
          items[index].price = items[index].basePrice *  items[index].count
          this.setState({items})
      }
  }
  handleDelete = (itemId) => {
    const items = this.state.items.filter(item => item.id !== itemId)
    this.setState({items})
  }
  handleSubmit = (value) => {
    console.log(value)
    var res = value.split(",");
    if(res.length == 2 ){
      var item = {
        id:this.state.items.length + 1,
        name:'',
        price:0,
        count:0,
        basePrice:0
      }
      item.name = res[0]
      item.basePrice = res[1]
      const items = [...this.state.items]
      items.push(item)
      this.setState({items})
    }else {
      alert("invalid input")
    }
  }
  calculateBill = () => {
    var total = 0
    this.state.items.forEach(item => {
      total+= item.price
    })
    if (total === 0) return 'Zero'
    return total
  }
  render() { 
    return (
      <React.Fragment>
        <NavBar totalItems={this.state.items.filter(item => item.count > 0).length} 
        totalBill ={this.calculateBill()}
        input={this.state.input} handleSubmit={this.handleSubmit}/>
        <Counters items={this.state.items} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} 
        onDelete={this.handleDelete}/>
      </React.Fragment>
    );
  }
}
 


export default App;
