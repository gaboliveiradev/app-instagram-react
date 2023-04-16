import logo from './logo.svg';
import './App.css';
import { db } from './firebase.js';
import { useEffect } from 'react';

function App() {
  /*
   * Como se fosse um constructor do php, c#. Ou seja é chamado quando nosso 
   * aplicativo é montado/inicializado.
   */
  useEffect(()=>{
    console.log(db);
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
