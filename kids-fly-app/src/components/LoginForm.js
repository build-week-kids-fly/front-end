import React from 'react'
import axios from 'axios'

// import KIDSFLY_API from '../App'

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
    const { email, password } = this.state

    axios
      // logs in user, response should include some sort of token to set in memory.
      //first POST points to deployed URL, Second POST points to local server
      .post("https://kidsflyapp.herokuapp.com/login", {
      // .post("http://localhost:9966/login", {
        email: email,
        password: password
      })
      .then(response => {
        const token = response.data.token;
        const returnData = JSON.stringify(response.data);
        console.log(returnData)
        // JWT - JSON WEB TOKEN
        localStorage.setItem("token", token);
        // saves a token in the browsers local memory.
      })
      .catch(err => {
        console.log(err);
      });
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
      <div>
      {/* <form onSubmit={this.login}> */}
				<h2>Login</h2>

				<p>{errorMessage}</p>

				<input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
				<input type="text" name="password" placeholder="Password" value={password} onChange={this.handleChange} />

			{/* </form> */}
				<button onClick={this.login}>Submit</button>
      </div>
    )
  }
}
