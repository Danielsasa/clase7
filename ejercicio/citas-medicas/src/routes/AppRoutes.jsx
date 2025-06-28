import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Citas from '../pages/Citas'
import CitaDetalle from '../pages/CitaDetalle'
import NuevaCita from '../pages/NuevaCita'
import NotFound from '../pages/NotFound'

const AppRoutes = ({ citas, agregarCita }) => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/citas' element={<Citas citas={citas} />} />
    <Route path='/cita/:id' element={<CitaDetalle citas={citas} />} />
    <Route path='/nueva-cita' element={<NuevaCita agregarCita={agregarCita} />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
)

export default AppRoutes
