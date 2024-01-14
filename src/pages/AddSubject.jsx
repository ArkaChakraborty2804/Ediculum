import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import URL from '../URL'
import { useNavigate } from 'react-router-dom'

const AddSubject = () => {
    const [name, setName] = useState("");
    const [semester, setSemester] = useState("");
    const [maxMarks, setMaxMarks] = useState("");

    const navigate = useNavigate();

    const addSubjectHandler = async (e) => {
        e.preventDefault();
        const Subject = {
            name,
            semester,
            maxMarks
        };
        try {
            const res = await axios.post(URL + '/api/subject/add', Subject, { withCredentials: true });
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Navbar />
            <div className='container mx-auto px-4'>
                <div className='bg-white rounded-lg shadow-md p-8 md:p-12 flex flex-col items-center justify-between'>
                    <div className='w-full flex-grow mb-8'>
                        <div className='text-2xl font-semibold mb-6'>Add a Subject</div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
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
                            <div className='col-span-1 flex flex-col mb-4'>
                                <label className='block text-gray-700 font-medium mb-2' htmlFor='subjectSemester'>
                                    Semester
                                </label>
                                <input
                                    id='subjectSemester'
                                    onChange={(e) => setSemester(e.target.value)}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    type="text"
                                    placeholder='Enter semester...'
                                />
                            </div>
                            <div className='col-span-1 flex flex-col mb-4'>
                                <label className='block text-gray-700 font-medium mb-2' htmlFor='subjectMaxMarks'>
                                    Max Marks
                                </label>
                                <input
                                    id='subjectMaxMarks'
                                    onChange={(e) => setMaxMarks(e.target.value)}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    type="text"
                                    placeholder='Enter max marks...'
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={addSubjectHandler}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                        Add
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddSubject;
