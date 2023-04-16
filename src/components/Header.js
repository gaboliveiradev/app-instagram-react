import { useEffect, useState } from 'react';
import { auth } from './../firebase.js';

function Header(props) {
    useEffect(()=>{
        
    }, []);

    function criarConta(e) {
        e.preventDefault();

        // Recuperando os dados dos input do criar conta
        let email = document.getElementById('email-cadastro').value;
        let username = document.getElementById('username-cadastro').value;
        let senha = document.getElementById('senha-cadastro').value;

        // Criar conta firebase.
        auth.createUserWithEmailAndPassword(email, senha)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName: username
            })

            alert('Conta Criada com Sucesso!');

            let modal = document.querySelector('.modal__criar__conta');
            modal.style.display = "none";
        }).catch((error)=>{
            alert(error.message);

            document.getElementById('email-cadastro').value = "";
            document.getElementById('username-cadastro').value = "";
            document.getElementById('senha-cadastro').value = "";
        });
    }

    function logar(e) {
        e.preventDefault();

        let email = document.getElementById('email-login').value;
        let senha = document.getElementById('senha-login').value;

        /*
         * Caso o nosso metodo signInWithEmailAndPassword de certo então (then) executa isso, se pegar um erro (catch) executa outra coisa.
         */
        auth.signInWithEmailAndPassword(email, senha)
        .then((auth)=> {
            props.setUser(auth.user.displayName);
        }).catch((error)=>{
            alert(error.message);

            document.getElementById('email-login').value = "";
            document.getElementById('senha-login').value = "";
        })
    }

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
                <form onSubmit={(e)=>criarConta(e)}>
                    <input id="email-cadastro" type="text" placeholder="seu email" />
                    <input id="username-cadastro" type="text" placeholder="seu username" />
                    <input id="senha-cadastro" type="password" placeholder="sua senha" />
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
                    <form onSubmit={(e)=>logar(e)}>
                        <input id="email-login" type="text" placeholder='digite seu email' />
                        <input id="senha-login" type="password" placeholder='digite sua senha' />
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