import React, {Component} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import signInWithGoogle from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        email: '',
        password: ''
      }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.email)
    this.setState({email:'', password: ''})
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() { 
    return ( 
        <div>
          <h1>I have an account</h1>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}>
            <FormInput name='email' label='email' type='email' value={this.state.email} handleChange={this.handleChange} required/>
            <FormInput name='password' label='password' type='password' value={this.state.password} handleChange={this.handleChange} required/>
            <div className='buttons'>
              <CustomButton type='submit'>Sign In</CustomButton>
              <CustomButton onClick={signInWithGoogle}>{' '}Sign In With Google{' '}</CustomButton>
            </div>
          </form>
        </div>
      );
  }
}

export default SignIn;