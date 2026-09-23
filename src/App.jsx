import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { CurrentWeatherCard } from './components/CurrentWeatherCard'

function App() {
  const [ciudad, setCiudad] = useState("Zipaquirá, Colombia")

  const handleBuscarCiudad = (nuevaCiudad) => {
    setCiudad(nuevaCiudad)
  }

  return (
    <div className='contenedor-movil'>
      <Header />
      <SearchBar onBuscar={handleBuscarCiudad} />
      <CurrentWeatherCard ciudad={ciudad} />
    </div>
  )
}

export default App