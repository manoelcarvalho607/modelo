import styles from './MenuButton.module.css';
import PropTypes from 'prop-types';

MenuButton.propTypes = {
    click: PropTypes.any
}

function MenuButton({ click }) {
    return (
        <div className={styles.menuButton}
            onClick={click}
        >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </div>
    )
}

export default MenuButton;