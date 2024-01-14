import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import the Link component
import Navbar from '../components/Navbar';
import axios from 'axios';
import URL from '../URL';


const Signup = () => {
    const [username,setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleRegister=async ()=>{
        try{
          const res=await axios.post(URL+"/api/auth/register",{username,email,password})
          console.log(res)
          setUsername(res.data.username)
          setEmail(res.data.email)
          setPassword(res.data.password)
          setError(false)
          navigate("/login")
          
        }
        catch(err){
          setError(true)
          console.log(err)
        }
    }

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-8 py-6 space-x-12 bg-gradient-to-r from-blue-500 to-blue-700 bg-blue-400/80">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            Ediculum
        </h1>
        <div className='flex items-center space-x-4'>
            <div><Link to='/login' className="text-white hover:text-gray-300">Login</Link></div>
        </div>
        </div>
      <div className="flex flex-col items-center p-4 mt-28">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">Signup</h2>
          <form className="flex flex-col">
          <label htmlFor="text" className="mb-2 text-sm">Username:</label>
            <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter your username" className="p-3 mb-4 border border-gray-300 rounded-md" required />

            <label htmlFor="email" className="mb-2 text-sm">Email:</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email" className="p-3 mb-4 border border-gray-300 rounded-md" required />

            <label htmlFor="password" className="mb-2 text-sm">Password:</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Enter your password" className="p-3 mb-4 border border-gray-300 rounded-md" required />
            {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}

            <div onClick={handleRegister} type="submit" className="bg-green-500 text-white py-2 rounded-md cursor-pointer text-center">Signup</div>
          </form>
          <p className="mt-4 text-sm text-center">Already have an account? <Link to="/login" className="text-blue-500">Login here</Link></p>
        </div>
      </div>
    </>
  );
}

export default Signup;
