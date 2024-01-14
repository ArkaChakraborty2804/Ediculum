import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import URL from '../URL';

const Home = () => {

    const [students,setStudents] = useState([])

    const fetchPosts = async(semester='') => {
        try{
            // console.log('hola!')
                let res = await axios.get(`${URL}/api/student/semester/${semester}`)
            // console.log(res.data)
            setStudents(res.data)
        }
        catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        fetchPosts()
    },[])

//   const studentData = [
//     { id: 1, name: 'Arka', totalMarks: 470 },
//     { id: 2, name: 'Arka', totalMarks: 470 },
//     { id: 3, name: 'Arka', totalMarks: 470 },
//     { id: 4, name: 'Arka', totalMarks: 470 },
//     { id: 5, name: 'Arka', totalMarks: 470 },
//     { id: 6, name: 'Arka', totalMarks: 470 },
//     // Add more student data as needed
//   ];

  const calculatePercentage = (totalMarks, total) => {
    return ((totalMarks / total) * 100).toFixed(2);
  };

  const calculateTotalMarks = (student) => {
    student.totalMarks = 0
    student.validMarks = 0
  
    // Iterate over each subject
    for (const subject of student.subjects) {
      if (subject.marks !== null && subject.marks !== undefined) {
        student.validMarks += subject.maxMarks
        student.totalMarks += subject.marks
      }
    }
    return student.totalMarks
  }

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Student Information</h2>
      
        <div>
            <input type="number" placeholder="Enter semester" onChange={(e) => fetchPosts(e.target.value)} 
            className="
              block
              w-full
              p-2
              border border-gray-300
              rounded-md
              text-gray-700
              outline-none
            "/>
        </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-center">Name</th>
            <th className="border p-2 text-center">Total Marks</th>
            <th className="border p-2 text-center">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td className="border p-2 text-center">{student.name}</td>
              <td className="border p-2 text-center">{calculateTotalMarks(student)}</td>
              <td className="border p-2 text-center">{calculatePercentage(student.totalMarks, student.validMarks)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Home;
