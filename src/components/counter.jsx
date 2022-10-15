import React, { Component } from "react";

class Counter extends Component {
  // get rid of local state to make create a single source of truth
  //   state = {
  //     value: this.props.counter.value,
  //     // imageUrl: 'https://picsum.photos/200',
  //     // tags: ['tag1', 'tag2', 'tag3'],
  //   };

  styles = {
    fontSize: "30px",
    fontWeight: "bold",
  };

  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
