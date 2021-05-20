import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import CustomBottom from '../custom-button/custom-button.component';



class SignIn extends React.Component{
    constructor(props){
        super(props);
            this.state={
                email:'',
                password:''
            }
        
    }
    onSubmitHandler=event=>{
        event.preventDefault();
        this.setState({email:''});
    }
    handleChange=event=>{
        const{name,value}=event.target;
        this.setState({[name]:value});
    }

    render(){
        return (<div className='sign-in' >
            <h2>I already have an account</h2>
            <span>Sign in with username and password</span>
            <form onSubmit={this.onSubmitHandler}>
            <FormInput
             name='email' 
             type='email' 
             value={this.state.email}
             handleChange={this.handleChange} 
            label='email'
            required/>
            
            <FormInput name='password'
             type='password' 
             value ={this.state.password} 
             handleChange={this.handleChange}
             label='password'
            required/>
            
            <CustomBottom type='submit'>Sign In</CustomBottom>
            </form>
        </div>)
    }
}
export default SignIn;