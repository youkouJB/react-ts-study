import React from 'react'
import Top from './pages/top'
import About from './pages/about'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Top/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </main>
    </Router> 
  )
}

export default App;
