import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import URL from '../URL'
import { useNavigate } from 'react-router-dom'

const UploadMarks = () => {
    const [registrationNumber, setRegistrationNumber] =  useState("")
    const [name, setName] = useState("")
    const [marks,setMarks] = useState(null)
    const [semester,setSemester] = useState("")

    const navigate = useNavigate()

    const uploadMarksHandler = async (e) => {
        e.preventDefault();
      
        const inputDoc = {
          name,
          registrationNumber,
          marks,
          semester
        };
      
        try {
          // Log the constructed URL for debugging
        //   console.log("Constructed URL:", URL + 'api/student/marks');
      
          const res = await axios.post(URL + '/api/student/marks', inputDoc, { withCredentials: true });
          navigate('/dashboard')
        } catch (err) {
          console.error("Error during request:", err);
        }
    };
      

    return (
        <>
        <Navbar />
        <div className='container mx-auto px-4'>
          <div className='bg-white rounded-lg shadow-md p-8 md:p-12 flex flex-col items-center justify-between'>
            <div className='w-full flex-grow mb-8'>
              <div className='text-2xl font-semibold mb-6'>Upload Marks</div>
              <form className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='col-span-1 sm:col-span-2 flex flex-col mb-4'>
                  <label className='block text-gray-700 font-medium mb-2' htmlFor='registrationNumber'>
                    Student Registration Number
                  </label>
                  <input
                    id='registrationNumber'
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    placeholder='Enter registration number...'
                  />
                </div>
                <div className='col-span-1 sm:col-span-2 flex flex-col mb-4'>
                  <label className='block text-gray-700 font-medium mb-2' htmlFor='subjectName'>
                    Subject Name
                  </label>
                  <input
                    id='subjectName'
                    onChange={(e) => setName(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="text"
                    placeholder='Enter subject name...'
                  />
                </div>
                <div className='col-span-1 sm:col-span-2 flex flex-col mb-4'>
                  <label className='block text-gray-700 font-medium mb-2' htmlFor='subjectMarks'>
                    Subject Marks
                  </label>
                  <input
                    id='subjectMarks'
                    onChange={(e) => setMarks(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="number"
                    placeholder='Enter subject marks...'
                  />
                </div>
                <div className='col-span-1 sm:col-span-2 flex flex-col mb-4'>
                  <label className='block text-gray-700 font-medium mb-2' htmlFor='semesterNumber'>
                    Semester Number
                  </label>
                  <input
                    id='semesterNumber'
                    onChange={(e) => setSemester(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type="number"
                    placeholder='Enter semester...'
                  />
                </div>
              </form>
            </div>
            <button
              onClick={uploadMarksHandler}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Upload
            </button>
          </div>
        </div>
        </>
    );
      
}

export default UploadMarks