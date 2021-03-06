import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 27 },
      { id: 2, name: 'Manu', age: 28 },
      { id: 3, name: 'Stephenie', age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    authenticated: false,
    toggleCount: 0
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  togglePersonHandler = () => {
    this.setState(( prevState, props ) => ({
      showPersons: !prevState.showPersons,
      toggleCount: prevState.toggleCount + 1
    }));
  }

  nameChangeHandler = (event, id) => {
    const newPersons = [...this.state.persons];
    newPersons.map(person => person.name = (person.id === id ? event.target.value: person.name))
    this.setState( {
      persons: newPersons
    } )
  }

  render() {
    return (
      <WithClass classes={classes.App}>
        <button
          onClick={() => {
            this.setState((prevState) => ({
              showCockpit: !prevState.showCockpit
            }))
          }}>
          {this.state.showCockpit ? 'Remove Cockpit' : 'Show Cockpit'}
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }
        }>
          {
            this.state.showCockpit &&
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler}
            />
          }
          {
            this.state.showPersons &&
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}
            />
          }
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
