import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.component.style.scss';
import {signUpStart} from '../../redux/user/user.action';
import {connect} from 'react-redux';


class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = event =>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }

    handleSubmit= async event =>{
        event.preventDefault();
        const {signUpStart}=this.props;
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !==confirmPassword){
            alert('password not equal to confirm password');
            return;
        }
        signUpStart({displayName,email,password})
        
    }


    render(){
        return<div className='sign-up'>
            <h2 className='title'>I do not have account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                    name='displayName' 
                    type='text'
                    value={this.state.displayName}
                    label='Display Name'
                    onChange={this.handleChange}
                    required
                />
                <FormInput 
                    name='email'
                    type='email'
                    value={this.state.email}
                    label='email'
                    onChange={this.handleChange}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    label='password'
                    onChange={this.handleChange}
                    required
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    value={this.state.confirmPassword}
                    label='confirm password'
                    onChange={this.handleChange}
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
        </div>
    }
}

const mapDispatchToProps = dispatch=>({
    signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})
export  default connect(mapDispatchToProps)(SignUp);
