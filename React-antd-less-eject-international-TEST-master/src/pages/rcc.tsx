import { Component } from "react";

export default class ProductClone extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState({
      count: this.state.count++,
    });
  };
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}
