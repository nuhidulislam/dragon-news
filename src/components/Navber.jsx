import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'
import AuthProvider, { authContext } from './Provider/AuthProvider';

const Navber = () => {
    const {user,logOut} = useContext(authContext);
    return (
        <div className='flex justify-between '>
            <div>{user && user.email}</div>
            <div className='nav-link space-x-5'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='login flex gap-2'>

              
                <img src={user} alt="" />
                {
                    user && user?.email? <button onClick={logOut} className='btn btn-neutral'>LogOut</button>:
                    <Link to="/auth/login" className='btn btn-neutral'>Login</Link>
                }

            </div>
            
        </div>
    );
};

export default Navber;