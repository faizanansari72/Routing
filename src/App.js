import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Error from './Components/Error';
import Page from './Components/Page';

import "./index.css"





function App() {
  return (
 <div className="App">
  <BrowserRouter>
  <Navbar/>
  
  <Routes>
    <Route exact path='/' element ={<Home/>}/>
    <Route  path='/About' element ={<About/>} />
    <Route path='/Service' element ={<Service/>} />
    <Route path='/Contact' element ={<Contact/>} />
    <Route  element ={<Error/>} />

  </Routes>
  </BrowserRouter>

 
 <Page/> 
   
   
       
 </div>
     

  );
}

export default App;
