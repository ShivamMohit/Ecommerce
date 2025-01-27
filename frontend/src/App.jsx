
import Home from './components/Home.jsx'

import './App.css'
import { BrowserRouter } from 'react-router-dom'
function App() {


  return (
    <>
      {/* <BrowserRouter>
      <Header />
      <BelowNav />
        <Routes>
          <Route path='/' element={<Home/>}  />
          
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Home/>
      
      </BrowserRouter>
    </>
  )
}

export default App
