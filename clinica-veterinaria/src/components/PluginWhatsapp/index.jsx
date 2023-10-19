import { Link } from "react-router-dom";
import styles from "./PluginWhatsapp.module.css";

function PluginWhatsapp() {
    return (
        <div className={styles.container}>
            <Link
                to="https://api.whatsapp.com/send?phone=5514998269848&text=vaidedigital%20-%20%20Suporte%20de%20atendimento%20ao%20cliente%0A%0A%20" 
                className={styles.icon} target="_blank" >
                    <img
                        className={styles.whatsapp} 
                        src="https://i.imgur.com/ryESuZ5.png"
                        data-selector="img"
                        alt="WhatsApp atendimento ao cliente" title="VAIDEDIGITAL - Atendimento ao cliente pelo WhatsApp"
                    ></img>
            </Link>
        </div>
    )
}

export default PluginWhatsapp;