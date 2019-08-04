import React from 'react';

import './App.css';

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Axios from 'axios';

// the base url for the backend API - it can be changed here if needed
export const KIDSFLY_API = "https://kidsflyapp.herokuapp.com"
// export const KIDSFLY_API = "https://kids-fly-backend.herokuapp.com"
// export const KIDSFLY_API = "localhost:9966"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      token: '',
      isAdmin: '',
    }
  }
  
  // this method is for using App state to store info rather than localStorage
  // setToken = (token) => {
  //   this.setState({
  //     token: token,
  //   })
  // }

  getUsers = () => {
    Axios
      .get(KIDSFLY_API + "/users", )
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Kids Fly</h1>
        </header>

        <RegisterForm />
        <LoginForm />
      </div>
    )
  }
}

export default App;
