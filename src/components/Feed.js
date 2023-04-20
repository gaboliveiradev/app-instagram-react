import firebase from 'firebase/compat/app'
import { db } from './../firebase.js';
import { useEffect, useState } from 'react';

function Feed(props) {

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
              <div className="post__comentar">
                <form onSubmit={(e)=>comentar(props.id, e)}>
                  <input id={"comentario-"+props.id} type="text" placeholder="escreva um comentário" />
                  <input type="submit" name="bnt-comentar" value="Comentar" />
                </form>
              </div>
            </div>
        </div>
    );
}

export default Feed;