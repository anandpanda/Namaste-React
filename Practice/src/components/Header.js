import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
    
    const [btnValue, setBtnValue] = useState('Login');

    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="flex justify-between bg-green-50 shadow-lg p-2 m-4">
            <img src={LOGO_URL} alt="App Logo" className="w-24" />
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className="px-3">Online Status : {useOnlineStatus()? "🟢" : "🔴"}</li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About Us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-3"><Link to="/cart">Cart</Link></li>
                    <button className='px-3' onClick={
                        () => setBtnValue( (btnValue === 'Login')? 'Logout' : 'Login' )}
                    > {btnValue} </button>
                    <li className="px-3 font-bold">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
