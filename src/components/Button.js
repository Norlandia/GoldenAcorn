import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return ( 
    <div>
      <button>{props.name}</button>
    </div>
   );
}
 
export default Button;
