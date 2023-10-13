
import { Link } from 'react-router-dom';
import MenuButton from '../MenuButton';
import styles from './Header.module.css';
import { useState } from 'react';


function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }


    return (
        <header className={styles.header}>
            <Link to="/">
                <span>CLÍNICA VETERINÁRIA <br />
                    LOGO DA MARCA
                </span>
            </Link>

            <nav
                className={`${styles.menuSandwich} ${ showMenu ? styles.show : '' }`}
                onClick={toggleMenu}
            >
                <Link to="#">Serviços Clínicos</Link>
                <Link to="#">Bem-estar Animal</Link>
                <Link to="#">Quem Somos</Link>
                <Link to="#">Perguntas Frequentes</Link>
            </nav>
            <MenuButton click={toggleMenu} />
            <div 
                className={`${styles.overlay} ${ showMenu ? styles.overlayShow : '' }`}
                ></div>
        </header>

    )
}

export default Header;