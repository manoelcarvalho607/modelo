import s from './Header.module.css';
import MenuMobile from '../MenuMobile';
import { Link } from 'react-router-dom';



function Header() {



    return (
        <header id='home' className={s.header}>
            <div className={s.header_title}>
                <Link to='#'>
                    <span>CLÍNICA VETERINÁRIA <br />
                        LOGO DA MARCA
                    </span>
                </Link>
            </div>
            <nav
                className={s.nav_menu}
            >
                <a href="#servicos-clinicos">Serviços Clínicos</a>
                <a href="#bem-estar">Bem-estar Animal</a>
                <a href="#sobre-nos">Sobre Nós</a>
                <a href="#perguntas-frequentes">Perguntas Frequentes</a>
                <a href='#contato'>Contato</a>
                
            </nav>
            <div className={s.menuMobile}>
                <MenuMobile />
                
            </div>

        </header>

    )
}

export default Header;