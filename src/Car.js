  
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props);
    //Initialize state for car 
    //e.g. brand/model/color/year
    this.state = {
      brand: 'Honda',
      model: 'Civic',
      color: 'black',
      year: '2010'
    }
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor = () => {
    // Change color state
    this.setState({color:'gray'});
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
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