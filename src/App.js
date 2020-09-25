import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    //initiate state
  }

  // Create incrementCount function for updating state to increase count

  // Create decrementCount function for updating state to decrease count

  // Create resetCount function for reset state to initial value

  render() {
    return (
        <div className="counter">
          <h1>React Counter</h1>
          <button onClick={this.decrementCount}>
            -{this.props.incrementAmount}
          </button>
          <span>Read current count in here</span>
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