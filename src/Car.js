  
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props);
    //Initialize state for car 
    //e.g. brand/model/color/year
  }
  
  changeColor = () => {
    // Change color state
  }

  render() {
    return (
      <div>
        <h1>My "Brand"</h1>
        <p>
          It is a "color" "model" from "year".
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}


export default Car;