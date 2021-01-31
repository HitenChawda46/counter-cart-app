import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    
    render() { 
        return ( 
            <div>
                {this.props.items.map(item => 
                
                    <Counter key={item.id} value={item} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}
                    onDelete={this.props.onDelete}>
                    </Counter>    
                )}
            </div>
        );
    }

}
 
export default Counters;
