import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: this.state.showPersons ? 'red' : 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: this.state.showPersons ? 'salmon' : 'lightgreen',
        color: 'black'
      }
    };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App.</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button
            onClick={this.togglePersonHandler}
            style={style}
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
      </StyleRoot>
    );
  }
}

export default Radium(App);
