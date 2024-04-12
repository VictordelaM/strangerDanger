import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

import './App.css'
import Images from './pages/Images'
import UploadImg from './pages/UploadImg'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Images' element={<Images />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/UploadImg' element={<UploadImg />} />
      </Routes>
      
    </>
  )
}

export default App
