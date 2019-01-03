import React, { Component } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';

class GoldenAcornApp extends Component {
  render() {
    return (
      <div>
        <Button name="Buy one" />
        <Display>
          
        </Display>
        <Button name="Eat one" />
      </div>
    );
  }
}

export default GoldenAcornApp;
