import styles from './Header.module.css';


function Header() {
    return (
        <header className={styles.header}>
            <span>CLÍNICA VETERINÁRIA</span>
            <nav>
                <a href='#'>Serviços Clínicos</a>
                <a href='#'>Bem-estar Animal</a>
                <a href='#'>Quem Somos</a>
                <a href='#'>Perguntas Frequentes</a>
            </nav>
        </header>

    )
}

export default Header;