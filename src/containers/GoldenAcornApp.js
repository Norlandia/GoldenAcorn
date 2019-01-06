import React, { Component } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';
import { buy, eat } from '../actions/acornAction';
import { connect } from 'react-redux';

const GoldenAcornApp = ({ count, buy, eat }) => {

  // const componentDidMount = () => {
  //   catchDocument();
  // };

  // const handleKeyUp = (event) => {
  //   if (event.keyCode === 38) {
  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //   } else if (event.keyCode === 40 && this.state.counter !== 0) {
  //     this.setState({
  //       counter: this.state.counter - 1,
  //     });
  //   }
  // };

  // const catchDocument = () => {
  //   const myDocument = document.querySelector('body');
  //   myDocument.addEventListener('keyup', (event) => handleKeyUp(event));
  // };

  return (
    <div>
      <Button name="Buy one" onClick={buy} />
      <Display counter={count} />
      <Button name="Eat one" onClick={eat} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    buy: () => dispatch(buy(1)),
    eat: () => dispatch(eat(1)),
  };
};

const mapStateToProps = (store) => ({
  count: store.acornReducer.counter,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoldenAcornApp);
