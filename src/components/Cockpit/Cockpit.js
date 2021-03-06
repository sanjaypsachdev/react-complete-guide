import React from 'react';
import classes from './Cockpit.module.css';
import WithClass from '../../hoc/WithClass';
import AuthContext from '../../context/auth-context';

const cockpit = props => {

  const btnClass = props.showPersons ? classes.Red : '';
  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push( classes.red );
  }
  if (props.personsLength <= 1) {
    assignedClasses.push( classes.bold );
  }

  return (
    <WithClass classes={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        onClick={props.clicked}
        className={btnClass}
      >
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        { context => <button onClick={ context.login }>Log in</button> }
      </AuthContext.Consumer>
    </WithClass>
  );
};

export default React.memo(cockpit);