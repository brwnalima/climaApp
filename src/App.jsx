import './App.css'
import WeatherPage from './components/pages/weatherPage/weatherPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    // <>
    //   <WeatherPage />
    // </>

    <Router>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  )
}

export default App
