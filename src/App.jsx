import { useState } from 'react'
import './bootstrap.min.css'
import Home from './pages/Home'
import Service from './pages/Service'
import Customer from './pages/Customer'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>


      <Header/>
    
      {/* <h1>Garageguru</h1> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/service/:id' element={<Service/>}/>
      </Routes>
      <ToastContainer/>
      <Footer/>
    </>
  )
}

export default App
