import React, { Component } from 'react';
import classes from './App.module.css';
import Person from '../components//Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 27 },
      { id: 2, name: 'Manu', age: 28 },
      { id: 3, name: 'Stephenie', age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  togglePersonHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  nameChangeHandler = (event, id) => {
    const newPersons = [...this.state.persons];
    newPersons.map(person => person.name = (person.id === id ? event.target.value: person.name))
    this.setState( {
      persons: newPersons
    } )
  }

  render() {
    const btnClass = this.state.showPersons ? classes.Red : '';
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App.</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
          onClick={this.togglePersonHandler}
          className={btnClass}
        >
          Toggle Persons
        </button>
        <div>
        { 
          this.state.showPersons &&
          this.state.persons.map(({ id, name, age }, index) => (
            <Person
              key={id}
              name={name}
              age={age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, id)}
            />
          ))
        }
        </div>
      </div>
    );
  }
}

export default App;
