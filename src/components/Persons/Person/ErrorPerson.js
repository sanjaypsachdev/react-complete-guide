import React from 'react';
import  classes from'./Person.module.css';

const person = ( props ) => {
  if (Math.random() > 0.7) {
    throw new Error('Something went wrong');
  }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      {props.children &&  <p>{props.children}</p>}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
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

export default person;