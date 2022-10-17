import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {

    render() { 
        const {counters, onDecrement, onDelete, onIncrement} = this.props;
        return (
            <div>
                {counters.map(counter => <Counter 
                    key={counter.id} value={counter.value} selected={true}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    counter={counter}/>)}
            </div>
        );
    }
}

export default Counters;
