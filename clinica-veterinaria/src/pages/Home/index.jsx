import styles from './Home.module.css';
import CardFigure from "../../components/Cards/CardFigure";
import ClinicalService from '../../components/ClinicalService';
import Model_container_box2 from '../../components/Model_container_box2';
import Model_container_box3 from '../../components/Model_container_box3';
import Model_container_question from '../../components/Model_container_question';
import Model_container_box4 from '../../components/Model_container_box4';









function Home() {
    return (
        <div className={styles.container}>
        <CardFigure/>
        <ClinicalService/>
        <Model_container_box2/>
        <Model_container_box3/>
        <Model_container_question/>
        <Model_container_box4/>
        </div>
    )
}

export default Home;
