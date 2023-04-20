import './App.css';
import { db } from './firebase.js';
import { useEffect, useState } from 'react';
import Header from './components/Header';

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
            <div className="post__box">
              <div className="post__single">
                <div className='post__conta'>
                  <h3><i class="bi bi-person-fill"></i> {val.info.userName}</h3>
                </div>
                <div className="post__image">
                  <img src={val.info.image} />
                </div>
                <div className="post__titulo">
                  <h3>{val.info.titulo}</h3>
                </div>
                <div className="post__descricao">
                  <p>{val.info.descricao}</p>
                </div>
                <div className="post__comentar">
                  <form>
                    <input type="text" name="comentario" placeholder="escreva um comentário" />
                    <input type="submit" name="bnt-comentar" value="Comentar" />
                  </form>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
