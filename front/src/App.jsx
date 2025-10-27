import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Home from './home/Home'
import Signup from './components/Signup'
import Courses from './courses/Courses'
import {Navigate, Route,Routes} from "react-router-dom"
import ContactPage from './contact/ContactPage'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [count, setCount] = useState(0)
    const[authUser,setAuthUser]=useAuth();
  console.log(authUser);

  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    {/* <Home />
    <Course /> */}
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
     <Toaster />
    </div>
    </>
  )
}

export default App
