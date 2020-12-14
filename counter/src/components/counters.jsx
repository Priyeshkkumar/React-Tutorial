import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    // Use map method to render the array of Counters
    return (
      <div>
        <button
          // We are now raising this event and bubbling this to parent
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          // key is an attribute for uniquely identifying element while value and selected
          // attributes are properties of each counter object
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            // Passing the whole counter object
            counter={counter}
            // passing "onDelete" as a prop to "Component"
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
