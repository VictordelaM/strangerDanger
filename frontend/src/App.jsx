import Home from './pages/Home'

import './App.css'

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
