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
  
  componentDidMount() {
    this.catchDocument();
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrease() {
    if (this.state.counter !== 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }

  handleKeyUp(event) {
    console.log(event);
    
    if (event.keyCode === 38) {
      this.setState({
        counter: this.state.counter + 1,
      });
    } else if (event.keyCode === 40 && this.state.counter !== 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }

  catchDocument() {
    const myDocument = document.querySelector('body');
    console.log(myDocument);
    
    myDocument.addEventListener('keyup', (event) => this.handleKeyUp(event))
  }


  render() {
    return (
      <div>
        <Button name="Buy one" onClick={(event) => this.increase(event)} />
        <Display>
          <h2>{this.state.counter}</h2>
        </Display>
        <Button name="Eat one" onClick={() => this.decrease()} />
      </div>
    );
  }
}

export default GoldenAcornApp;
