import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  return ( 
    <div>
      <h2>{props.counter}</h2>
    </div>
   );
}
 
export default Display;

Display.propTypes = {

}

// Display should get a number via the special children property — containment
