import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const HooksApp = () => {

  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 27 },
      { name: 'Manu', age: 28 },
      { name: 'Stephenie', age: 29 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    // DONT EVER DO THIS --> this.state.persons[0].name = "Maximillian";
    setPersonState( {
      persons: [
        { name: 'Maximillian', age: 27 },
        { name: 'Manu', age: 28 },
        { name: 'Stephenie', age: 20 }
      ]
    } )
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );
}

export default HooksApp;
