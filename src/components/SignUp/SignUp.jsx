import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
        setError('')
        if (password !== confirm) {
            setError('Your password did not match')
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-controls'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder='Email' />
                </div>
                <div className='form-controls'>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='Password' />
                </div>
                <div className='form-controls'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='Confirm Password' />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p className='error-message'>{error}</p>
                <p className='new-to'><small>Already have an account?<Link className='create-new-account' to="/login">Login</Link></small></p>
            </form>
        </div>
    );
};

export default SignUp;