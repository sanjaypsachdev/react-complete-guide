import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = ( props ) => {
  const style = {
    '@media (min-width: 500px)' : {
      width: '450px'
    }
  }
  return (
    <div className="Person" style={style}>
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

export default Radium(person);