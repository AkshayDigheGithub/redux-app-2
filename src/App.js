import React from 'react';
import './App.css';
import UserComponent from './components/user/user';
import SingleUserList from './components/user/singleUser';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1>Redux App</h1>

      {
        (props.users.length === 0 || props.users.length === 6) ?

          <UserComponent /> : <SingleUserList />
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(App);
