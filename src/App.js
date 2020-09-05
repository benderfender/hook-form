import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './component/UserForm';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cwpass: ""
  });

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <UserForm inputs{...state} firstname="" lastname="" email="" password="" cwpass=""/>
    </div>
  );
}

export default App;
