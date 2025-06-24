import { BrowserRouter, Link } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App () {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/citas'>Ver Citas</Link>
      </nav>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
