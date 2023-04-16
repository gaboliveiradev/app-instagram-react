import { useEffect, useState } from 'react';

function Header() {
    /*
    * Depois que o usuário logar, iremos armazenar dentro de user, para futuramente sabermos qual tela exibir para ele
    * a tela de login, ou caso ele esteja logado, exibiremos outra tela.
    */
    const [user, setUser] = useState("Gabriel");

    return (
        <><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link><div className="header">
            <div className="header__logo">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" width="180" />
                </a>
            </div> {/* Fechamento Div Header__Logo */}

            {(user) ?
                <div className="header__info__logado">
                    <p><i class="bi bi-person-circle"></i> Olá, <b>{user}</b></p>
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