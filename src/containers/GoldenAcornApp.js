import React, { Component } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';

class GoldenAcornApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increase() {

  }

  decrease() {

  }

  render() {
    return (
      <div>
        <Button name="Buy one" />
        <Display><h2>{this.state.counter}</h2></Display>
        <Button name="Eat one" />
      </div>
    );
  }
}

export default GoldenAcornApp;
