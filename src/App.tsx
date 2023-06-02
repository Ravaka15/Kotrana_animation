import React from 'react';
import Index from './pages/movies/Index';
import "./App.css"
import Navbar from './pages/lyaout/Navbar/Navbar';
import Home from './pages/accueil/Home';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='container'>
        <Home/>
        <Index />
      </div>
    </div>
  );
}

export default App;
