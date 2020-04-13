import React from 'react';
import './App.css';
import Form from './Form/Form.js'
import SignIn from './SignIn/SignIn';

function App() {
  return (
    <div className="App">

      <h1>Sign Up page</h1>
      <Form/>

      <br></br>
      <h1> Log in page</h1>
      <SignIn/>
      
          </div>
  );
}

export default App;
