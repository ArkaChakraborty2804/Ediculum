import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import URL from '../URL';
import axios from 'axios';

const Navbar = () => {
    const { setUser, user } = useContext(UserContext);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = async () => {
        try {
            const res = await axios.get(URL + '/api/auth/logout', { withCredentials: true });
            setUser(null);
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 md:p-6">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                    <Link to="/dashboard">Ediculum</Link>
                </h1>
                <div className='flex items-center space-x-4'>
                    <div><Link to='/add_student' className="text-white hover:text-gray-300">Add Student</Link></div>
                    <div><Link to='/add_subject' className="text-white hover:text-gray-300">Add Subject</Link></div>
                    <div><Link to='/upload_marks' className="text-white hover:text-gray-300">Upload Marks</Link></div>
                    <div><Link to='/upload_assignment' className="text-white hover:text-gray-300">Upload Assignment</Link></div>
                    <div onClick={handleLogout} className='cursor-pointer text-white hover:text-gray-300'>Logout</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
