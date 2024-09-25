import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Tanarok from './pages/Tanarok/Tanarok';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tanarok" element={<Tanarok />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
