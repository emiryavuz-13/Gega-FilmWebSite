import React from "react";
import Header from "./components/Header"
import {Routes, Route} from 'react-router-dom'
import Home from './public/Home'
import About from './public/About'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="container">
      <Header/>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
      <Footer/>

    </div>
  );
};

export default App;
