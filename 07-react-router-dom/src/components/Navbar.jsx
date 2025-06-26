import { NavLink } from 'react-router-dom'

const Navbar = ({ isLoggedIn, login, logout }) => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          {/* NavLink agrega la clase 'active' cuando la URL coincide */}
          <NavLink to='/'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/characters'>Personajes</NavLink>
        </li>
        {
          isLoggedIn && (
            <li>
              <NavLink to='/Secret'>Secreto</NavLink>
            </li>
          )
}
        <div className='auth-buttons'>
          {
            isLoggedIn
              ? (
                <button onClick={logout} className='btn-logout'>Cerrar Sesión</button>
                )
              : (
                <button onClick={login} className='btn-login'>Iniciar Sesión</button>
                )
          }
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
