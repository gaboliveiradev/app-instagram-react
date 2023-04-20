import firebase from 'firebase/compat/app'
import { db } from './../firebase.js';
import { useEffect, useState } from 'react';

function Feed(props) {

    const [comentarios, setComentarios] = useState([]);

    useEffect(()=>{
        db.collection('posts').doc(props.id).collection('comentarios').onSnapshot((snapshot)=>{
          setComentarios(snapshot.docs.map((document)=>{
            return {
              id: document.id,
              info: document.data()
            }
          }))
        });
    },[])

    function comentar(id, e) {
        e.preventDefault();

        let comentario = document.querySelector('#comentario-'+id).value;
        
        db.collection('posts').doc(id).collection('comentarios').add({
            nome: props.user,
            comentario: comentario
        });

        document.querySelector('#comentario-'+id).value = "";

        alert("Você comentou em um post!");
    }

    return (
        <div className="post__box">
            <div className="post__single">
              <div className='post__conta'>
                <h3><i class="bi bi-person-fill"></i> {props.info.userName}</h3>
              </div>
              <div className="post__image">
                <img src={props.info.image} />
              </div>
              <div className="post__titulo">
                <h3>{props.info.titulo}</h3>
              </div>
              <div className="post__descricao">
                <p>{props.info.descricao}</p>
              </div>
              { (props.user == null) ?
                <div className="post__comentar">
                    <p>Você precisa ter uma conta e estar logado para comentar em uma publicação e ver os comentários existentes.</p>
                </div>
                :
                <div className="post__comentar">
                    <form onSubmit={(e)=>comentar(props.id, e)}>
                      <input id={"comentario-"+props.id} type="text" placeholder="escreva um comentário" />
                      <input type="submit" name="bnt-comentar" value="Comentar" />
                    </form>
                </div>
              }
              { (props.user) ?
                <div className="post__comentarios">
                  {
                      comentarios.map((val)=>{
                          return (
                              <div className="comments__single">
                                  <p><i class="bi bi-person-hearts"></i> <b>{val.info.nome}</b> {val.info.comentario}</p>
                              </div>
                          );
                      })
                  }
                </div>
                :
                ""
              }
            </div>
        </div>
    );
}

export default Feed;