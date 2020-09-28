  
import * as React from 'react';

const App = ({ incrementAmount }) => {
  const [count, setCount] = React.useState(0);

  const resetCount = () => {
    setCount(0);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <button onClick={decrementCount}>
        -{incrementAmount}
      </button>
      <span>{count}</span>
      <button onClick={incrementCount}>
        +{incrementAmount}
      </button>
      <br /><br />
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;