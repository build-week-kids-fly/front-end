import React from 'react'

// this component will store the login info from user input
// and send it to the login server, receiving a token or an error message
// The token will be stored in App state, or the form wil re-render
// displaying the error message

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  // the return value should include the token
  // if login is unsuccessful, the form should be displayed again

  // the component displays the input fields,
  // which include an onSubmit event handler, 
  render() {
    return (

    )
  }
}