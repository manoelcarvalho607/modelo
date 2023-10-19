import { Link } from 'react-router-dom';
import PluginWhatsapp from '../PluginWhatsapp';
import styles from './Footer.module.css';


function Footer() {
    return (
        <footer className={styles.footer}>
            <h2>&copy; 2023. Clínica Veterinária (MODELO-01) - VAIDEDIGITAL</h2>
            <div className={styles.whatsapp}>
                <PluginWhatsapp />
            </div>
            <div className={styles.container}>
                <div className={styles.box01}>
                    <ul>
                        <li>
                            <a className={styles.link} href="#home">
                                <h2>Home</h2>
                            </a>
                        </li>
                        <li>
                            <Link className={styles.link} to="#">
                                <h2>Política de Privacidade</h2>
                            </Link>
                        </li>
                        <li>
                            <a className={styles.link} href='#sobre-nos'>
                                <h2>Sobre Nós</h2>
                            </a>
                        </li>
                        <li>
                            <a className={styles.link} href='#perguntas-frequentes'>
                                <h2>Perguntas Frequentes</h2>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.box02}>
                    <div className={styles.title2}>
                        <h4>Redes Sociais | Contato | Endereço da Clínica</h4>
                    </div>
                    <div className={styles.container_one}>
                        <div className={styles.box1}>
                            <Link
                                to='https://api.whatsapp.com/send?phone=5514998269848&            text=vaidedigital%20-%20%20Suporte%20de%20atendimento%20ao%20cliente%0A%0A%20' target='_black'>
                                <figure className={styles.box_figure}>
                                    <div
                                        title='Link WhatsApp'
                                        className={styles.box_img03}
                                    >
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div>
                            <Link to='https://www.instagram.com/vaidedigital/?igshid=YWYwM2I1ZDdmOQ%3D%3D' target='_black'>
                                <figure className={styles.box_figure}>
                                    <div
                                        title='Link Instagram'
                                        className={styles.box_img04}
                                    >
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className={styles.box2}>
                            <Link>
                                <figure className={styles.box_figure}>
                                    <div
                                        title='Telefone fixo'
                                        className={styles.box_img01}
                                    >
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className={styles.box2}>
                            <Link>
                                <figure className={styles.box_figure}>
                                    <div
                                        title='Localização de Endereço'
                                        className={styles.box_img02}
                                    >
                                    </div>
                                </figure>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;