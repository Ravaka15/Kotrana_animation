import React from 'react';
import Index from './pages/movies/Movie/Index';
import "./App.css"
import Navbar from './pages/lyaout/Navbar/Navbar';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Index />
    </div>
  );
}

export default App;
