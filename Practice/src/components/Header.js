import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header = () => {
    const [btnValue, setBtnValue] = useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={
                        () => setBtnValue( (btnValue === 'Login')? 'Logout' : 'Login' )}
                    > {btnValue} </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
