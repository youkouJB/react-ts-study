import React from 'react';
import Header from './pages/header/index';
import Footer from './pages/footer/index'
import Top from './pages/index';
import About from './pages/about/index';
import Counter from './pages/count/index';
import Todo from './pages/todo/index';
import Test from './pages/test/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Top/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/count' element={<Counter/>} />
          <Route path='/test' element={<Test/>} />
          <Route path='/todo' element={<Todo/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
