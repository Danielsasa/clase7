import { useParams, Link } from 'react-router-dom'

function CitaDetalle({ citas }) {
  const { id } = useParams()
  const cita = citas.find(c => c.id === Number(id))

  if (!cita) {
    return (
      <div className='detalle-cita-container'>
        <h2>Cita no encontrada</h2>
        <Link to='/citas' className='detalle-btn'>Volver al listado</Link>
      </div>
    )
  }

  return (
    <div className='detalle-cita-container'>
      <h2>Detalles de la Cita</h2>
      <div className='detalle-cita-card'>
        <p><strong>Paciente:</strong> {cita.paciente}</p>
        <p><strong>Fecha:</strong> {cita.fecha}</p>
        <p><strong>Motivo:</strong> {cita.motivo}</p>
        <p><strong>Doctor:</strong> {cita.doctor}</p>
        <p><strong>Estado:</strong> <span className={`estado ${cita.estado.toLowerCase()}`}>{cita.estado}</span></p>
        <p><strong>Notas:</strong> {cita.notas}</p>
      </div>
      <Link to='/citas' className='detalle-btn'>Volver al listado</Link>
    </div>
  )
}

export default CitaDetalle