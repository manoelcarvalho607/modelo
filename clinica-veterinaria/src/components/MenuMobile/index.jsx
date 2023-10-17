
import { Link } from 'react-router-dom';
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
                <Link to="#">Serviços Clínicos</Link>
                <Link to="#">Bem-estar Animal</Link>
                <Link to="#">Quem Somos</Link>
                <Link to="#">Perguntas Frequentes</Link>
                <Link to="#">Contato</Link>
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