import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    //initiate state
    this.state = {
      count: 0
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  // Create incrementCount function for updating state to increase count
    incrementCount = ()=>{
      this.setState({count:this.state.count+this.props.incrementAmount})
    };

  // Create decrementCount function for updating state to decrease count
    decrementCount = ()=>{
      this.setState({count:this.state.count-this.props.incrementAmount});
    }
  // Create resetCount function for reset state to initial value
    resetCount = ()=>{
      this.setState({count:0});
    }

  render() {
    return (
        <div className="counter">
          <h1>React Counter</h1>
          <button onClick={this.decrementCount}>
            -{this.props.incrementAmount}
          </button>
          <span>{this.state.count}</span>
          <button onClick={this.incrementCount}>
            +{this.props.incrementAmount}
          </button>
          <br/><br/>
          <button onClick={this.resetCount}>Reset</button>
        </div>
    );
  }
}

export default App;