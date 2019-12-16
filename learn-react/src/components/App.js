import React from 'react';
import './App.css';


class Welcome extends React.Component {
  render(){
    return <h1>Hello, {this.props.name}</h1>
  }
}


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <Welcome name="Zoli" />
      <Clock />
    </div>
  );
}

export default App;
