import { Link } from 'react-router-dom'
import './Citas.css'

const Citas = ({ citas }) => (
  <div className='citas-container'>
    <div className='citas-header'>
      <h2>Listado de Citas</h2>
      <Link to='/nueva-cita' className='agregar-btn'>+ Agregar nueva cita</Link>
    </div>
    <div className='citas-list'>
      {citas.map(cita => (
        <div className={`cita-card ${cita.estado.toLowerCase()}`} key={cita.id}>
          <h3>{cita.paciente}</h3>
          <p><strong>Fecha:</strong> {cita.fecha}</p>
          <p><strong>Motivo:</strong> {cita.motivo}</p>
          <p><strong>Doctor:</strong> {cita.doctor}</p>
          <p><strong>Estado:</strong> <span className='estado'>{cita.estado}</span></p>
          <p><strong>Notas:</strong> {cita.notas}</p>
          <Link className='detalle-btn' to={`/cita/${cita.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  </div>
)

export default Citas