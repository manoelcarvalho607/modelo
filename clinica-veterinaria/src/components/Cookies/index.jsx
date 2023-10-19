import { Link } from 'react-router-dom';
import s from './Cookies.module.css';
import { useState } from 'react';

// Você pode aceitar todos, rejeitar os que não são essenciais ou configurá-los da forma que preferir.

function Cookies() {
    const [toClose, setToClose] = useState(false)

    const divCookies = () => {
        setToClose(!toClose)
        console.log(toClose)
    }

    return (
        <section className={ toClose ? s.overlay1 : s.overlay }>
            <div className={ toClose ? s.container1 : s.container }>
                <div className={s.container_one}>
                    <div className={s.box_text} >
                        <p>Utilizamos cookies para melhorar a sua experiência nesse site.
                            Ao clicar no botão Permitir Todos os Cookies você nos autoriza a coletar dados que
                            são essenciais para o bom funcionamento do site, Para mais informações sobre o uso de cookies, acesse a
                            nossa política de Privacidade. <Link><p>Mais Informações</p></Link></p>
                    </div>
                        <button
                            className={s.button}
                            onClick={divCookies}>Permitir Todos os Cookies
                        </button>
                </div>
            </div>
        </section>

    )
}

export default Cookies;