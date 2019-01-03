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
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  decrease() {
    if (this.state.counter !== 0) {
      this.setState({
        counter: this.state.counter - 1,
      })
    }
  }

  render() {
    return (
      <div>
        <Button name="Buy one" onClick={() => this.increase()}/>
        <Display><h2>{this.state.counter}</h2></Display>
        <Button name="Eat one" onClick={() => this.decrease()}/>
      </div>
    );
  }
}

export default GoldenAcornApp;
