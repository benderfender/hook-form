import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './component/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
      <UserForm />
      </div>
    </div>
  );
}

export default App;
