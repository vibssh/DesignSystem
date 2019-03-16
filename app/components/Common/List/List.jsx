/* Component  : List is a Functional Component
 * Created on : 2/3/2019 17:38:37
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';

// import Button from '../Button/Button';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  listArray: PropTypes.array,
  listClassName: PropTypes.string,
  listLinkClassName: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
    // name: 'Vaibhav Shringarpure',
    listArray: [],
    listClassName: '',
    listLinkClassName: ''
};

let hrefLink = '#';

/* Functional Component Function below */
const List = props => {
  //Define your Methods Here
  let itemList = null;

  if (props.listArray.length) {
      
      itemList = props.listArray.map((list, index) => {

      const getObjectKeys = Object.keys(list, (k) => {
           return list[k][0];
      });

      const getObjectValue = Object.values(list, (v) => {
          return list[v];
      })

      const kValue = Array.prototype.forEach.call(getObjectKeys, (g) => {
          return g;
      })

      const keyValue = (kValue ==='id') ? kValue : index;

      return (
        <li key={keyValue} className={props.listClassName}>
          {/*<Button buttonText={list.key} />*/}
          <a href={hrefLink} title={getObjectValue[1]} className={props.listLinkClassName}>
            {getObjectValue[1]}
          </a>
        </li>
      );
    });  
  }
  

  //Returns JSX below
  return <React.Fragment>{itemList}</React.Fragment>;
};

List.propTypes = propTypes; // from Line 13
List.defaultProps = defaultProps; // from Line 22

export default List;
