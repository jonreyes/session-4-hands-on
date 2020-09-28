  
import * as React from 'react';

const App = ({ incrementAmount }) => {
  const [count, setCount] = React.useState(0);

  resetCount = () => {
    setCount(0);
  };

  incrementCount = () => {
    setCount(count + 1);
  };

  decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <button onClick={this.decrementCount}>
        -{incrementAmount}
      </button>
      <span>{count}</span>
      <button onClick={this.incrementCount}>
        +{incrementAmount}
      </button>
      <br /><br />
      <button onClick={this.resetCount}>Reset</button>
    </div>
  );
}

export default App;