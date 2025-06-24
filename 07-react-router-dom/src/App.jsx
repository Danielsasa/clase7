import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Navbar />
      <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
