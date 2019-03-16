/* Component  : Box is a Functional Component
 * Created on : 16/3/2019 16:58:15
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
};

/* Functional Component Function below */
const Box = props => {
  //Define your Methods Here

  //Returns JSX below
  return <div />;
};

Box.propTypes = propTypes; // from Line 11
Box.defaultProps = defaultProps; // from Line 17

export default Box;
