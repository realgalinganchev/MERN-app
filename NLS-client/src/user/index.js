import React, { Component } from 'react';

class User extends Component {
    constructor() {
        super();
        this.state = { user: [] };

    }
    componentDidMount() {
        fetch('http://localhost:3001/api/user')
            .then(res => {
                return res.json()
            })
            .then(user => {
                this.setState({ user })
            });
    }
    render() {
        return (
            <div>
                {this.state.user.map(user =>
                    <div key={user._id}>Username=={user.username} favourites=== {user.favourites} email=={user.email}</div>
                )}
            </div>
        );
    }
} export default User;























