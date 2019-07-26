import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

  render() {
    return this.props.persons.map(({ id, name, age }, index) => (
      <Person
        key={id}
        name={name}
        age={age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, id)}
      />
    ));
  }
}

export default Persons;

// const persons = (props) => props.persons.map(({ id, name, age }, index) => (
//   <Person
//     key={id}
//     name={name}
//     age={age}
//     click={() => props.clicked(index)}
//     changed={(event) => props.changed(event, id)}
//   />
// ));

// export default React.memo(persons);