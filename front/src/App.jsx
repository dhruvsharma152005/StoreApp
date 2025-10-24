import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Home from './home/Home'
import Signup from './components/Signup'
import Courses from './courses/Courses'
import {Route,Routes} from "react-router-dom"
import ContactPage from './contact/ContactPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    {/* <Home />
    <Course /> */}
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/course" element={<Courses />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
    </div>
    </>
  )
}

export default App
