import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('')
    
    const signin = e =>{
        e.preventDefault();

        //firebase ......
    }

    const register = e =>{
        e.preventDefault();
    }
    return (
        <div className="login">
            <Link to = '/'>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="amazon" className="login__logo" />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange= {
                        e =>setemail(e.target.value)
                    }/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={
                        e =>setPassword(e.target.value)
                    }/>

                    <button className="login__signInButton" onClick ={signin}>Sign In</button>
                </form>

                <p>
                    By sigining-in you to AMAZON CLONE'S Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and
                    our Interest-Based Ads
                </p>
                
                 <p>Don't have an account , Create your amazon clone's account here</p>
                  
                <button className="login__registerButtton" onClick={register}>
                    Sign-Up
                </button>
                
            </div>
        </div>
    )
}

export default Login
