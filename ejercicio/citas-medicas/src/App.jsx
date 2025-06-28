import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import { useState } from 'react'
import citasEjemplo from './data/citas.json'
import './App.css'

function App () {
  const [citas, setCitas] = useState(citasEjemplo)

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, { ...nuevaCita, id: citas.length + 1 }])
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes citas={citas} agregarCita={agregarCita} />
    </BrowserRouter>
  )
}

export default App
