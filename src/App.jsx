import './App.css'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { CurrentWeatherCard } from './components/CurrentWeatherCard'

function App() {
  return (
    <div className='contenedor-movil'>
      <Header />
      <SearchBar />
      <CurrentWeatherCard />
    </div>
  )
}

export default App