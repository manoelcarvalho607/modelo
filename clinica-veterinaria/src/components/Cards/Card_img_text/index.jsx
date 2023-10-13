
import PropTypes from 'prop-types';
import styles from './Card_img_text.module.css';





function Card_img_text({ image, title, text }) {
    return (
        <div className={styles.container}>
            <figure className={styles.boxImg}>
                <img
                    className={styles.imgCard}
                    src={image}
                    alt="imagem de divulgação"
                />
            </figure>
            <div className={styles.text}>
                <h5 className={styles.titleh5}><span className={styles.titlespan}>{title}</span></h5>
                <p className={styles.parag}>{text}</p>
            </div>
        </div>
    )

}

export default Card_img_text;

Card_img_text.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string
}


