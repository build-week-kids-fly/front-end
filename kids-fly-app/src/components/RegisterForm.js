import React from 'react'
import axios from 'axios'

import KIDSFLY_API from '../App'

class RegisterForm extends React.Component {
  constructor() {
    super()
    this.state = {
      // first_name: '',
      // last_name: '',
      email: '', 
      // phone: '',
      password: '',
      is_admin: null,
      // airport: '',
      id: null,
      errorMessage: null,
    }
  }

  handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
  }

  register = () => {
    const address = KIDSFLY_API + "/users"
    const { email, password, is_admin, errorMessage } = this.state
    const payload = { email, password, is_admin, errorMessage }

    axios
      .post(address, payload)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  render() {
    const { email, password, errorMessage } = this.state

    return (
      <form onSubmit={this.register}>
				<h2>Register</h2>

				<p>{errorMessage}</p>

				<input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
				<input type="text" name="password" placeholder="Password" value={password} onChange={this.handleChange} />

				<button type="submit">Submit</button>
			</form>
    )
  }
}

export default RegisterForm