import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';


import Inicio from './components/Inicio'
import Empresas from './components/Empresas'
import Mapa from './components/Mapa'



function App() {


  return (
    <>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/empresas">Empresas</Link></li>
            <li><Link to="/mapa">Mapa</Link></li>
          </ul>
        </nav>

      <Routes>
        <Route path="/" element={<Inicio />}>Inicio</Route>
        <Route path="/empresas" element={<Empresas />}>Empresas</Route>
        <Route path="/mapa" element={<Mapa />}>Mapa</Route>
      </Routes>

    </>
  )
}

export default App


















/* const [count, setCount] = useState(0) */