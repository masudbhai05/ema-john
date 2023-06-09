import React, { useContext, useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>            
            <form onSubmit={handleSignIn} className='form'>
                <div className='form-controls'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder='Email' />
                </div>
                <div className='form-controls'>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='Password' />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p className='error-message'>{error}</p>
                <p className='new-to'><small>New to Ema-john?<Link className='create-new-account' to="/signup">Create New Account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;