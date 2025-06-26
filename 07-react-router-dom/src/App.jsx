import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import { useState, useEffect } from 'react'

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isAuth') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('isAuth', isLoggedIn)
  }, [isLoggedIn])

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} login={login} logout={logout} />
        <AppRoutes isAuth={isLoggedIn} />
      </BrowserRouter>
    </div>
  )
}

export default App
