import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnValue, setBtnValue] = useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className='login-btn' onClick={
                        () => setBtnValue( (btnValue === 'Login')? 'Logout' : 'Login' )}
                    > {btnValue} </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
