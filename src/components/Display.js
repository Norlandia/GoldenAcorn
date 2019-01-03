import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  return ( 
    <div>
      {props.children}
    </div>
   );
}
 
export default Display;

Display.propTypes = {

}

// Display should get a number via the special children property — containment
