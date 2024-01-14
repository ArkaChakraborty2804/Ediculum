import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import the Link component
import Navbar from '../components/Navbar';
import axios from 'axios';
import URL from '../URL';
import { UserContext } from '../context/UserContext';

const Login = () => {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error,setError] = useState(false)
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)


    const handleLogin = () => {
        try{
            const res = axios.post(URL+'/api/auth/login',{email, password},{withCredentials:true})
            setUser(res.body)
            setError(false)
            navigate('/dashboard')
        }
        catch(err){
            setError(true)
        }
    }

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-8 py-6 space-x-12 bg-gradient-to-r from-blue-500 to-blue-700 bg-blue-400/80">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            Ediculum
        </h1>
        <div className='flex items-center space-x-4'>
            <div><Link to='/signup' className="text-white hover:text-gray-300">Signup</Link></div>
        </div>
        </div>
        <div className="flex flex-col items-center p-4 mt-28">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-sm">Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email" className="p-3 mb-4 border border-gray-300 rounded-md" required />

                <label htmlFor="password" className="mb-2 text-sm">Password:</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Enter your password" className="p-3 mb-4 border border-gray-300 rounded-md" required />

                <div onClick={handleLogin} type="submit" className="bg-green-500 text-white py-2 rounded-md cursor-pointer text-center">Login</div>
            </form>
            <p className="mt-4 text-sm text-center">Don't have an account? <Link to="/signup" className="text-blue-500">Register here</Link></p>
            </div>
        </div>
    </>
  );
}

export default Login;
