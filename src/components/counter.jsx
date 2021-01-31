import React, { Component } from 'react';


class Counter extends Component {
    state = {  }

    render() { 
        return ( 
            <div>
                 <div className="card-body">
                    <div className="card-title">
                        <span style={{fontSize:35}} className="m-2">{this.props.value.name}</span>
                        <p className="m-2 badge rounded-pill bg-primary" style={{fontSize:15}}>{this.props.value.basePrice} Rs/-</p>
                        <button type="button" onClick={() => {this.props.onIncrement(this.props.value)}} className="btn btn-secondary btn-lg">Increment</button>
                        <span style={{fontSize : 20,fontWeight : 'bold'}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                        <button type="button" onClick={() => {this.props.onDecrement(this.props.value)}} className="btn btn-secondary btn-lg">Decrement</button>
                        <button type="button" onClick={() => {this.props.onDelete(this.props.value.id)}}  className="m-2 btn btn-danger btn-lg">Delete</button>
                    </div>
                    <div className="card-text ">
                        <p className="m-2 badge rounded-pill bg-primary" style={{fontSize:15}}>{this.props.value.price} Rs/-</p>
                    </div>

                </div>
                
            </div>
         );
    }

    formatCount =  () => {
        if (this.props.value.count === 0) return 'Zero'
        return this.props.value.count
    }

    getBadgeClasses = () => {
        let classses = "badge m-2  badge-";
        classses += (this.props.value.count === 0) ? "warning" : "primary";
        return classses;
    }

}
 
export default Counter;
 