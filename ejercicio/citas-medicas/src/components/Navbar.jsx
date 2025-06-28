import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => (
  <nav className='navbar'>
    <Link to='/'>Inicio</Link>
    <Link to='/citas'>Ver Citas</Link>
  </nav>
)

export default Navbar