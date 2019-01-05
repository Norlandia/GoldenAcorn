import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  
  return ( 
    <div>
      <button onClick={props.onClick}>{props.name}</button>
    </div>
   );
}
 
export default Button;

Button.propTypes = {
  name: PropTypes.string,
}

// Button should get a function and a string via properties
