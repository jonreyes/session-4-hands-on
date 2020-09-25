  
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  resetCount = () => {
    this.setState({ count: 0 });
  };

  incrementCount = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + props.incrementAmount,
    }));
  };

  decrementCount = () => {
    this.setState((prevState, props) => ({
      count: prevState.count - props.incrementAmount,
    }));
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