import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Teachers from './pages/Teachers/Teachers';
import Schools from './pages/Schools/Schools';
import Profile from './pages/Profile/Profile';
import SchoolsProfile from './pages/SchoolsProfile/SchoolsProfile';
import TeachersProfile from './pages/TeacherProfile/TeachersProfile';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/schools" element={<Schools />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/schoolprofile/:id' element={<SchoolsProfile />} />
          <Route path='/teacherprofile/:id' element={<TeachersProfile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
