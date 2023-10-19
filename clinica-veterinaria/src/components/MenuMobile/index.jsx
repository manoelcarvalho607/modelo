import MenuButton from '../MenuButton';
import s from './MenuMobile.module.css';
import { useState } from 'react';


function MenuMobile() {

    const [showMenu, setShowMenu] = useState(false)
    

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }



    return (
        <div className={s.container}>
            <nav
                className={`${s.menuSandwich} ${showMenu ? s.show : ''}`}
                onClick={toggleMenu}
            >
                <a href='#servicos-clinicos'>Serviços Clínicos</a>
                <a href='#bem-estar'>Bem-estar Animal</a>
                <a href='#sobre-nos'>Sobre Nós</a>
                <a href='#perguntas-frequentes'>Perguntas Frequentes</a>
                <a href='#contato'>Contato</a>
            </nav>
            <MenuButton click={toggleMenu} />
            <div
                className={showMenu === false ? s.overlay : s.overlayShow}
                onClick={toggleMenu}
            ></div>
        </div>

    )
}

export default MenuMobile;