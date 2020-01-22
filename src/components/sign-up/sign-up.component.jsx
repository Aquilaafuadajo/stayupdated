import React, {Component} from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
      }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return;
    }
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user)
      await createUserProfileDocument(user, {displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    }catch(error){ console.log('there was an error', error.message)}
    

  }

  handleChange = (e) => {
    const {name, value} = e.target
    console.log(value)
    this.setState({[name]: value})
  }
  render() { 
    const {displayName, email, password, confirmPassword} = this.state;
    return ( 
        <div className='sign-up'>
          <h1>I don't have an account</h1>
          <span>Sign up with your email and password</span>
          <form onSubmit={this.handleSubmit}>
            <FormInput name='displayName' type='text' label='Display Name' value={displayName} onChange={this.handleChange} required/>
            <FormInput name='email' type='email' label='Email' value={email} onChange={this.handleChange} required/>
            <FormInput name='password' type='password' label='Password' value={password} onChange={this.handleChange} required/>
            <FormInput name='confirmPassword' type='password' label='Confirm Password' value={confirmPassword} onChange={this.handleChange} required/>
            <CustomButton type='submit'>Sign Up</CustomButton>
          </form>
        </div>
      );
  }
}

export default SignUp;