import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import URL from '../URL';

const UploadPdf = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    fetchPdfFiles();
  }, []);

  const fetchPdfFiles = async () => {
    try {
      const response = await axios.get(URL+'/api/assignment/pdf');
      setPdfFiles(response.data);
      console.log(setPdfFiles)
    } catch (error) {
      console.error('Error fetching PDF files:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('pdf', selectedFile);

      await axios.post(URL+'/api/assignment/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    });

      // Handle successful upload, e.g., show a success message or refresh the PDF files list
      fetchPdfFiles();
      console.log('File uploaded successfully');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error uploading file:', error);
    }
  };

  const handleDownload = (filepath, filename) => {
    const fileUrl = window.location.origin + '/' + filepath;
  
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', filename); // Use the original filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4'>
        <div className='bg-white rounded-lg shadow-md p-8 md:p-12 flex flex-col items-center justify-between'>
          <div className='text-2xl font-semibold mb-6'>Upload Assignment</div>
          <div className='w-full flex-grow mb-8'>
            <form className='grid grid-cols-1 gap-4'>
              <div className='col-span-1 flex flex-col mb-4'>
                <label className='block text-gray-700 font-medium mb-2' htmlFor='assignmentFile'>
                  Choose a PDF file:
                </label>
                <input
                  id='assignmentFile'
                  type='file'
                  accept='.pdf'
                  onChange={handleFileChange}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
            </form>
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Upload
          </button>
          <div className='mt-8'>
            <h2 className='text-xl font-semibold mb-4'>Uploaded PDF Files:</h2>
            {pdfFiles.map((pdf) => (
              <div key={pdf._id} className='mb-2'>
                <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                onClick={() => handleDownload(pdf.filepath, pdf.filename)}
                >
                Download {pdf.filename}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadPdf;