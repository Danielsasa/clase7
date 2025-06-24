import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom' // 1.Importar useParams

const CharacterDetail = () => {
  const { id } = useParams() // 2. Traer el id de los params
  // TODO: Hacer uso del hook useNavigate
  const navigate = useNavigate() // 3. Inicializar useNavigate

  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        setCharacter(data)
      } catch (error) {
        console.error('Error al obtener el detalle del personaje:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [id])

  // TODO: Declarar función para regresar de manera programatica
  const handleGoBack = () => {
    navigate('/characters') // 4. Usar navigate para regresar a la página anterior
  }

  if (loading) return <p>Cargando detalle...</p>
  if (!character) return <p>Personaje no encontrado.</p>

  return (
    <div className='character-detail'>
      <img src={character.image} alt={character.name} />
      <div className='character-detail-info'>
        <h2>{character.name}</h2>
        <p><strong>Estado:</strong> {character.status}</p>
        <p><strong>Especie:</strong> {character.species}</p>
        <p><strong>Género:</strong> {character.gender}</p>
        <p><strong>Origen:</strong> {character.origin.name}</p>
      </div>
      {/* TODO: Implementar botón de manera programatica con useNavigate */
        <button onClick={handleGoBack} className='btn-back'>Volver a Personajes</button>
      }
    </div>
  )
}

export default CharacterDetail
