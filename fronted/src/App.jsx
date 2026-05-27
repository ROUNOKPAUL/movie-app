import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./Css/App.css";
import MovieCard from './Components/MovieCard'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import{Routes,Route}from"react-router-dom"
import { MovieProvider } from './contexts/MovieContext'
import NavBar from './Components/Navbar'
function App() {
  


  return (
    <MovieProvider>
      <NavBar></NavBar>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </main>
  </MovieProvider>
  )
}

export default App;
