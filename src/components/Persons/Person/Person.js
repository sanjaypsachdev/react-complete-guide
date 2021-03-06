import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import  classes from'./Person.module.css';
import withClassFunc from '../../../hoc/withClassFunc';
import AuthContext from '../../../context/auth-context';

const Person = ( props ) => {
  const nameInputRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return (
    <>
        { 
          authContext.authenticated ?
            <p>Authenticated !</p> :
            <p>Please log in !</p>
        }
      <p
        onClick={props.click}
      >
        I'm {props.name} and I am {props.age} years old!
      </p>
      {props.children &&  <p>{props.children}</p>}
      <input
        type="text"
        ref={nameInputRef}
        onChange={props.changed}
        value={props.name}
      />
    </>
  )
};

//Below is how we do the same as above in a class component
// class Person extends React.Component {
//   render() {
//     return (
//       <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
//       {props.children &&  <p>{props.children}</p>}
//     );
//   }
// }

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClassFunc(Person, classes.Person);