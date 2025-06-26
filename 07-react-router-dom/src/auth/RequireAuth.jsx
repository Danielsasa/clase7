import { Navigate } from 'react-router-dom'

const RequireAuth = ({ isAuth, children }) => {
  return isAuth ? children : <navigate to='/' replace />
}

export default RequireAuth
