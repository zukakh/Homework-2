import React from 'react';

class ChildComponent extends React.Component {
    render() {
        const { users, isUserLoggedIn } = this.props;

        if (!isUserLoggedIn) {
            return <p>You are not authorized to see the user list.</p>;
        }

        if (users.length === 0) {
            return <p>No users in the system.</p>;
        }
        return (
            <div>
                <h2>User Information</h2>
                <ul>

                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} {user.lastName}, Age: {user.age}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ChildComponent;
