function Feed(props) {

    function comentar(id, e) {
        e.preventDefault();
        alert("Comentando no post "+ id);
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
                  <input type="text" name="comentario" placeholder="escreva um comentário" />
                  <input type="submit" name="bnt-comentar" value="Comentar" />
                </form>
              </div>
            </div>
        </div>
    );
}

export default Feed;