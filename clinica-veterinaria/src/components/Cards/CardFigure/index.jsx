import styles from './CardFigure.module.css';
import image1 from './images/dog-1280.jpg';
import imagefundo from './images/img3.jpg';


function CardFigure() {
    return (
        <section className={styles.container} style={{ backgroundImage: `url(${imagefundo})`}}>
            <div className={styles.text}>
                <p>
                    <strong>Cuidando</strong><br />
                    com Carinho <br />
                    <span>CLÍNICA VETERINÁRIA</span> <br />
                    Agende uma Consulta
                </p>
                <button className={styles.btn}>
                    Agende uma Consulta
                </button>
            </div>
            <figure>
                <img
                    className={styles.imgCard}
                    src={image1}
                    alt={'Imagem de um cachorro'}
                />
            </figure>
        </section>
    )
}

export default CardFigure;