import React from 'react';
import "./sign-in.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import {AiOutlineEye} from "react-icons/ai";
import CustomButton from "../../components/custom-button/custom-button.component"
import {signInWithGoogle} from "../../components/firebase/firebase.utils.js"

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    submithandler = event => {
        event.preventDefault();
        this.setState({email: '', password: ""})
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    


    changeTo = () => {
    var passwordField = document.getElementById("password");
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    }



    render() { 
        return ( 
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submithandler}>
                    <FormInput  name="email" type="email" label="email" handleChange={this.handleChange} value={this.state.email} required/>
                    <div className="form-input-eye">
                        <FormInput  name="password" id="password" type="password" label="password" handleChange={this.handleChange} value={this.state.password} required/>
                        <AiOutlineEye className="eye-icon" onClick={this.changeTo} />
                    </div>
                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with google</CustomButton>
                    </div>
                    
                </form>
            </div>
         );
    }
}
 
export default SignIn;