import React from 'react';
import FormInput from '../formInput/formInput.component.jsx';
import CustomButton from '../customButton/customButton.component.jsx';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import './signIn.styles.scss';

class SignIn extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }


    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        let { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2 className='title'>Sign In</h2>
                <span>Sign in with you email and password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        name='email'
                        type='email'
                        value={ email }
                        handleChange={ this.handleChange }
                        label='email'
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={ password }
                        handleChange={ this.handleChange }
                        label='password'
                        required
                    />
                    <CustomButton type='submit'> Sign In </CustomButton>
                    
                </form>
                <CustomButton onClick={ signInWithGoogle }> Sign In With Google </CustomButton>
            </div>
        )
    }
}

export default SignIn;