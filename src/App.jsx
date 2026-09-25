import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { CurrentWeatherCard } from './components/CurrentWeatherCard'

function App() {
  const [ciudad, setCiudad] = useState("Zipaquirá")
  const [datosClima, setDatosClima] = useState(null)
  const [error, setError] = useState(false)

  const handleBuscarCiudad = async (nuevaCiudad)=> {
    setCiudad(nuevaCiudad)
    setError(false)

    const apiKey = import.meta.env.VITE_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nuevaCiudad}&appid=${apiKey}&units=metric&lang=es`

    try {
      const respuesta = await fetch(url)
      const datos = await respuesta.json()

      if (respuesta.ok) {
        setDatosClima(datos)
      } else {
        setError(true)
        setDatosClima(null)
      }
    } catch (error) {
      console.log("Error de conexión a internet", error)
      setError(true)
    }
  }

  return (
    <div className='contenedor-movil'>
      <Header />
      <SearchBar onBuscar={handleBuscarCiudad} />

      <CurrentWeatherCard ciudad={ciudad} clima={datosClima} error={error} />
    </div>
  )
}

export default App