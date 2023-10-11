import styles from './CardFigure.module.css';

import image1 from './images/dog-640.jpg';


function CardFigure() {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <p>
                    Cuidando com Carinho <br/>
                    <span>CLÍNICA VETERINÁRIA</span> <br/>
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