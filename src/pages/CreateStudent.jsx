import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import URL from '../URL'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateStudent = () => {
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [registrationNumber,setRegistrationNumber] = useState("")
    const [semester,setSemester] = useState("")

    const navigate = useNavigate()

    const studentCreateHandler = async (e) => {
        e.preventDefault()
        const Student = {
            name,
            registrationNumber,
            batch,
            semester
        }
        try{
            const res = await axios.post(URL+'/api/student/create',Student,{withCredentials:true})
            navigate('/dashboard')
        }
        catch(err){
            console.error(err)
        }
    }
    return (
        <>
        <Navbar />
        <div className='container mx-auto px-4'>
          <div className='bg-white rounded-lg shadow-md p-8 md:p-12 flex flex-col items-center justify-between'>
            <div className='w-full flex-grow mb-8'>
              <div className='text-2xl font-semibold mb-6'>Add a New Student</div>
              <form className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='col-span-1 sm:col-span-2 flex flex-col mb-4'>
                  <label className='block text-gray-700 font-medium mb-2' htmlFor='studentName'>
                    Student's Name
                  </label>
                  <input
                    id='studentName'
                    onChange={(e) => setName(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    placeholder='Enter student name...'
                  />
                </div>
                <div className='col-span-1 sm:col-span-2 flex flex-col mb-4'>
                  <label className='block text-gray-700 font-medium mb-2' htmlFor='studentBatch'>
                    Student's Batch
                  </label>
                  <input
                    id='studentBatch'
                    onChange={(e) => setBatch(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="number"
                    placeholder='Enter student batch...'
                  />
                </div>
                <div className='col-span-1 sm:col-span-2 flex flex-col mb-4'>
                  <label className='block text-gray-700 font-medium mb-2' htmlFor='studentRegistrationNumber'>
                    Student's Registration Number
                  </label>
                  <input
                    id='studentRegistrationNumber'
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    placeholder='Enter student registration number...'
                  />
                </div>
                <div className='col-span-1 sm:col-span-2 flex flex-col mb-4'>
                  <label className='block text-gray-700 font-medium mb-2' htmlFor='studentSemester'>
                    Student's Semester
                  </label>
                  <input
                    id='studentSemester'
                    onChange={(e) => setSemester(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="number"
                    placeholder='Enter student semester...'
                  />
                </div>
              </form>
            </div>
            <button
              onClick={studentCreateHandler}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Create
            </button>
          </div>
        </div>
        </>
      );
      
}

export default CreateStudent