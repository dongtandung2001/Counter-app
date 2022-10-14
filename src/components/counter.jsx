import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        // imageUrl: 'https://picsum.photos/200',
        // tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: '30px',
        fontWeight: 'bold'
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = product => {
        this.setState({value: this.state.value + 1});
    };

    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
            <button onClick={() => this.handleIncrement({id:1})} className='btn btn-secondary btn-sm'>Increment</button>
            {/* <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul> */}
        </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 bg-';
        classes += (this.state.value === 0 ? 'warning' : 'primary');
        return classes;
    }

    formatCounter () {
        const {value} = this.state;
        return value === 0 ? 'Zero': value;
    }
}
export default Counter;