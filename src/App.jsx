
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CartPage from './components/CartPage'
import LoginButton from './Auth'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isAuthenticated) {
    return (
      <BrowserRouter>
      <div>
        <Navbar />   
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div>
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
      <div>
        <LoginButton />   
       {/*  <Routes>
          <Route  path='/' element={<LoginButton />} />
          </Routes> */}
      </div>
      </BrowserRouter>
    )
  }
 
}

export default App
