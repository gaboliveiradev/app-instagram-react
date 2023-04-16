import logo from './logo.svg';
import './App.css';
import { db } from './firebase.js';
import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {
  /*
   * Como se fosse um constructor do php, c#. Ou seja é chamado quando nosso 
   * aplicativo é montado/inicializado.
   */
  useEffect(()=>{
    
  },[])

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
