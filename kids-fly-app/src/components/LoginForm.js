import React from 'react'
import axios from 'axios'

import KIDSFLY_API from '../App'

// this component will store the login info from user input
// and send it to the login server, receiving a token or an error message
// The token will be stored in App state, or the form wil re-render
// displaying the error message

export default class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    }
  }

  handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  
  // this method takes the login info, gathered by the form
  // and stored in state, and sends it to the login server, 
  // receiving in response a token or an error message
  login = () => {
    const address = KIDSFLY_API + "/login"
    const { email, password } = this.state

    axios
      // the login endpoint may be "GET" not "POST"
      .get(address, {
        email: email, 
        password: password,
      })
      .then(response => {
        console.log(response)
        // localStorage.setItem("token", response.data.token)
      })
      .catch(err => {
        console.log(err)
      })
  }
  // the return value should include the token
  // if login is unsuccessful, the form should be displayed again

  // the component displays the input fields,
  // which include an onSubmit event handler. 
  // the onSubmit event handler is a function 
  // which sends the info from state to the server via axios, 
  // and receives either the data with the token or an error message.
  render() {
    const { email, password, errorMessage } = this.state

    return (
      <form onSubmit={this.login}>
				<h2>Login</h2>

				<p>{errorMessage}</p>

				<input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
				<input type="text" name="password" placeholder="Password" value={password} onChange={this.handleChange} />

				<button type="submit">Submit</button>
			</form>
    )
  }
}