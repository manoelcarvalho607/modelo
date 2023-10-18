
import { Link } from 'react-router-dom';
import s from './Header.module.css';
import MenuMobile from '../MenuMobile';



function Header() {



    return (
        <header className={s.header}>
            <div className={s.header_title}>
                <Link to="/">
                    <span>CLÍNICA VETERINÁRIA <br />
                        LOGO DA MARCA
                    </span>
                </Link>
            </div>
            <nav
                className={s.nav_menu}
            >
                <Link to="#">Serviços Clínicos</Link>
                <Link to="#">Bem-estar Animal</Link>
                <Link to="#">Quem Somos</Link>
                <Link to="#">Perguntas Frequentes</Link>
                <Link to="#">Contato</Link>
            </nav>
            <div className={s.menuMobile}>
                <MenuMobile />
            </div>

        </header>

    )
}

export default Header;