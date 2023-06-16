import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {!user && <Link to="/signup">Sign up</Link>}
                {!user && <Link to="/login">Login</Link>}
                {user && <span className='user-text'>Welcome {user.email} <button onClick={handleSignOut} className='logout'>Sign out</button></span>}
            </div>
        </nav>
    );
};

export default Header;