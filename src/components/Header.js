import { useEffect, useState } from 'react';

function Header(props) {
    useEffect(()=>{
        
    }, []);

    function abrirModalCriarConta(e) {
        e.preventDefault();
        
        let modal = document.querySelector('.modal__criar__conta');
        modal.style.display = "block";
    }

    function fecharModalCriar() {
        let modal = document.querySelector('.modal__criar__conta');
        modal.style.display = "none";
    }

    return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
        <div className="modal__criar__conta">
            <div className="form__criar__conta">
                <div onClick={()=>fecharModalCriar()} className="close__modal__criar"><i class="bi bi-x-square-fill"></i></div>
                <a>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" width="180" />
                </a>
                <h2>Criar Conta</h2>
                <form>
                    <input type="text" placeholder="seu email" />
                    <input type="text" placeholder="seu username" />
                    <input type="password" placeholder="sua senha" />
                    <input type="submit" value="Criar Conta!" />
                </form>
            </div>
        </div>

        <div className="header">
            <div className="header__logo">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" width="180" />
                </a>
            </div> {/* Fechamento Div Header__Logo */}

            {(props.user) ?
                <div className="header__info__logado">
                    <p><i class="bi bi-person-circle"></i> Olá, <b>{props.user}</b></p>
                    <a href="#">Fazer Publicação</a>
                </div>
                :
                <div className="header__login__form">
                    <form>
                        <input type="text" placeholder='digite seu email' />
                        <input type="password" placeholder='digite sua senha' />
                        <input type="submit" name="bnt-entrar" value="Logar" />
                    </form>
                    <div className="btn__criar__conta">
                        <a onClick={(e)=>abrirModalCriarConta(e)} href="#">Não possui uma conta? Clique aqui!</a>
                    </div>
                </div>}
        </div>
        </>
    )
}

export default Header;