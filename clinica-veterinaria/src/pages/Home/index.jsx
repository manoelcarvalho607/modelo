import styles from './Home.module.css';
import CardFigure from "../../components/Cards/CardFigure";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import ClinicalService from '../../components/ClinicalService';









function Home() {
    return (
        <div className={styles.container}>
        <Header/>
        <CardFigure/>
        <ClinicalService/>
        <Container>
            
        </Container>
        <Footer/>
        </div>
    )
}

export default Home;
