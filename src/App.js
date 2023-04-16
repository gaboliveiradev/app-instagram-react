import logo from './logo.svg';
import './App.css';
import { db } from './firebase.js';
import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {
  /*
  * Depois que o usuário logar, iremos armazenar dentro de user, para futuramente sabermos qual tela exibir para ele
  * a tela de login, ou caso ele esteja logado, exibiremos outra tela.
  */
  const [user, setUser] = useState("Gabriel");

  /*
   * Como se fosse um constructor do php, c#. Ou seja é chamado quando nosso 
   * aplicativo é montado/inicializado.
   */
  useEffect(()=>{
    
  },[])


  /* 
   * Passando os dados da useState via props para nosso componente header
   * Props: é um estágio do desenvolvimento que acontece quando precisamos obter dados que estão 
   * em várias camadas na árvore de componente react
   */
  return (
    <div className="App">
      <Header user={user}></Header>
    </div>
  );
}

export default App;
