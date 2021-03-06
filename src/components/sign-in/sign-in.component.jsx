import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import CustomBottom from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';



class SignIn extends React.Component{
    constructor(props){
        super(props);
            this.state={
                email:'',
                password:''
            }
        
    }
    handleSubmit = async event => {
        event.preventDefault();
         
        const {email, password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email: '', password: '' });
        }catch(error){
            console.log(error);
        }    
        
      };
    
    handleChange=event=>{
        const{name,value}=event.target;
        this.setState({[name]:value});
    }

    render(){
        return (<div className='sign-in' >
            <h2>I already have an account</h2>
            <span>Sign in with username and password</span>
            <form onSubmit={this.handleSubmit }>
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
            <div className='buttons'>
            <CustomBottom type='submit'>Sign In</CustomBottom>
            <CustomBottom onClick={signInWithGoogle} isGoogleSignIn>Sign In Google</CustomBottom>
            </div>
            </form>
        </div>)
    }
}
export default SignIn;