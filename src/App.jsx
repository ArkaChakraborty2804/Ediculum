import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateStudent from './pages/CreateStudent';
import AddSubject from './pages/AddSubject';
import UploadMarks from './pages/UploadMarks';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UploadPdf from './pages/UploadPdf';
import { UserContextProvider } from './context/UserContext';
import PrivateRoutes from './PrivateRoutes';


function App() {
  return (
    <UserContextProvider>
      <Router>
      <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path='/add_student' element={<CreateStudent/>}/>
            <Route path="/add_subject" element={<AddSubject />} />
            <Route path="/upload_marks" element={<UploadMarks />} />
            <Route path="/upload_assignment" element={<UploadPdf />} />
          </Route>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
    </UserContextProvider>
  );
}

export default App;
