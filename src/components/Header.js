import { useEffect, useState } from 'react';

function Header(props) {
    useEffect(()=>{
        props.setUser("Gabriel");
    }, []);

    return (
        <><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link><div className="header">
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
                        <a href="#">Não possui uma conta? Clique aqui!</a>
                    </div>
                </div>}
        </div></>
    )
}

export default Header;