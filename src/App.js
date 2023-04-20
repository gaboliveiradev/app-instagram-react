import './App.css';
import { db, auth } from './firebase.js';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Feed from './components/Feed';

function App() {
  /*
  * Depois que o usuário logar, iremos armazenar dentro de user, para futuramente sabermos qual tela exibir para ele
  * a tela de login, ou caso ele esteja logado, exibiremos outra tela.
  */
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  /*
   * Como se fosse um constructor do php, c#. Ou seja é chamado quando nosso 
   * aplicativo é montado/inicializado.
   */
  useEffect(()=>{
    // Fazendo com que não deslogue após reiniciar o navegador
    auth.onAuthStateChanged((val)=>{
      setUser(val.displayName);
    })

    /* Atualizar nossa aplicação em tempo real */
    /* Desta forma irá exibir as postagens pelo tempo em orde decresente */
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot)=>{
      setPosts(snapshot.docs.map((document)=>{
        return {
          id: document.id,
          info: document.data()
        }
      }))
    });

  },[])

  /* 
   * Passando os dados da useState via props para nosso componente header
   * Props: é um estágio do desenvolvimento que acontece quando precisamos obter dados que estão 
   * em várias camadas na árvore de componente react
   * 
   * UMA ALTERNATIVA É UTILIZAR O REDUX
   */
  return (
    <div className="App">
      <Header setUser={setUser} user={user}></Header>

      {
        posts.map((val)=>{
          return (
            <Feed info={val.info} id={val.id} user={user}></Feed>
          );
        })
      }
    </div>
  );
}

export default App;
