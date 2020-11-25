import React, { useEffect, useState } from 'react';
import { vegetables } from '../../consts/vegetables';

const DetailFunc = ({ match, history }) => {
  const { id } = match.params
  const [loading, setLoading] = useState(false)
  const [currentVegetable, setCurrentVegetable] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const v = vegetables.find(v => v.id === id)
      if (v) {
        setCurrentVegetable(v)
      } else {
        setError("No se encontró ninguna verdura")
      }
      setLoading(false)
    }, 2000)
  }, [])

  const goBack = () => {
    history.goBack()
  }

  return (
    <div>
      {loading ? <h1>Cargando...</h1> :
        currentVegetable && <h1> Detalle {currentVegetable.name}</h1>
      }
      {!loading && error && <h1>{error}</h1>}
      <button onClick={goBack}>Volver</button>
    </div>
  )

}

export default DetailFunc;