import React from 'react';
import ChildComponent from './ChildComponent.jsx';

class ParentComponent extends React.Component {
  render() {

    const users = [
      { id: 1, name: 'Bidzina', lastName: 'Ivanishvili', age: 30 },
      { id: 2, name: 'nino', lastName: 'xecuriani', age: 25 }
    ];

    const isUserLoggedIn = true;

    return (
      <div>

        <ChildComponent users={users} isUserLoggedIn={isUserLoggedIn} />
      </div>
    );
  }
}

export default ParentComponent;