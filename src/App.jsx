import { Navbar } from './components'
import './styles/styles.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Coin from './pages/Coin'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
