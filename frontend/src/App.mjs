import React from 'react';
import axios from 'axios';
import './App.scss';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    axios.get('/api/users')
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(e => console.log('Error: ', e));
  }

  handleAddUser = (user) => {
    axios.post('/api/users', user)
      .then(() => {
        this.fetchUsers(); // Refresh the list after adding
      })
      .catch(e => console.log('Error: ', e));
  };

  render() {
    return (
      <div className="App container">
        <h1>User Management</h1>
        <div className="user-management-app">
          <AddUser handleAddUser={this.handleAddUser} />
          <UserList users={this.state.users} />
        </div>
      </div>
    );
  }
}
