import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NuevaCita({ agregarCita }) {
  const [form, setForm] = useState({
    paciente: 'Nombre',
    fecha: '2025-07-03',
    motivo: 'Motivo de la cita',
    doctor: 'Doctor',
    estado: 'Pendiente',
    notas: 'Notas.'
  })
  const navigate = useNavigate()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    agregarCita(form)
    navigate('/citas')
  }

  return (
    <div className='detalle-cita-container'>
      <h2>Agregar Nueva Cita</h2>
      <form className='detalle-cita-card' onSubmit={handleSubmit}>
        <label>
          Paciente:
          <input type='text' name='paciente' value={form.paciente} onChange={handleChange} required />
        </label>
        <label>
          Fecha:
          <input type='date' name='fecha' value={form.fecha} onChange={handleChange} required />
        </label>
        <label>
          Motivo:
          <input type='text' name='motivo' value={form.motivo} onChange={handleChange} required />
        </label>
        <label>
          Doctor:
          <input type='text' name='doctor' value={form.doctor} onChange={handleChange} required />
        </label>
        <label>
          Estado:
          <select name='estado' value={form.estado} onChange={handleChange} required>
            <option value='Pendiente'>Pendiente</option>
            <option value='Confirmada'>Confirmada</option>
            <option value='Cancelada'>Cancelada</option>
          </select>
        </label>
        <label>
          Notas:
          <textarea name='notas' value={form.notas} onChange={handleChange} rows={3} />
        </label>
        <button type='submit' className='agregar-btn'>Guardar cita</button>
      </form>
      <Link to='/citas' className='detalle-btn'>Volver al listado</Link>
    </div>
  )
}

export default NuevaCita