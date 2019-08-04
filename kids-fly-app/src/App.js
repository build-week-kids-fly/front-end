import React from 'react';

import './App.css';

import LoginForm from './components/LoginForm'

// the base url for the backend API - it can be changed here if needed
export const KIDSFLY_API = "https://kidsflyapp.herokuapp.com"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      token: '',
      isAdmin: '',
    }
  }
  
  

  // setToken = (token) => {
  //   this.setState({
  //     token: token,
  //   })
  // }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Kids Fly</h1>
        </header>
        
        <LoginForm />
      </div>
    )
  }
}

export default App;
