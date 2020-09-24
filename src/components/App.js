import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calculator = calculate(this.state, buttonName);
    this.setState(calculator);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Display value={`${total}${operation}${next}`.replace(/null/g, '')} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
