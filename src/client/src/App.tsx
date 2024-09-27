import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Tanarok from './pages/Tanarok/Tanarok';
import Iskolak from './pages/Iskolak/Iskolak';
import Profil from './pages/Profil/Profil';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tanarok" element={<Tanarok />} />
          <Route path="/iskolak" element={<Iskolak />} />
          <Route path='/profile' element={<Profil />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
