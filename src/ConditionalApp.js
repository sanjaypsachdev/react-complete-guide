import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class ConditionalApp extends Component {
  state = {
    persons: [
      { name: 'Max', age: 27 },
      { name: 'Manu', age: 28 },
      { name: 'Stephenie', age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // DONT EVER DO THIS --> this.state.persons[0].name = "Maximillian";
    this.setState( {
      persons: [
        { name: newName, age: 27 },
        { name: 'Manu', age: 28 },
        { name: 'Stephenie', age: 20 }
      ],
      otherState: 'some other value'
    } )
  }

  togglePersonHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 27 },
        { name: event.target.value, age: 28 },
        { name: 'Stephenie', age: 20 }
      ],
      otherState: 'some other value'
    } )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working</p>
        <button
          onClick={this.togglePersonHandler}
          style={style}
        >
          Toggle Persons
        </button>
        { 
          this.state.showPersons &&
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={() => this.switchNameHandler('Maximillian')}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max')}
              changed={this.nameChangeHandler}
            >
              My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        }

      </div>
    );
    //Below is what the above JSX gets compiled to in javascript
    // return React.createElement('div',
    //                            {className: 'App'},
    //                            React.createElement('h1',
    //                                                null,
    //                                                'Hi, I\'m a React App'));
  }
}

export default ConditionalApp;