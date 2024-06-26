import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import Header from './Components/Header'
import PrivateRoute from './Components/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<Login/>} />
        <Route path='/sign-up' element={<Signup/>} />

        <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
