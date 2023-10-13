import Card_img_text from '../Cards/Card_img_text';
import Carousel from '../Carousel';
import styles from './ClinicalService.module.css';

import image1 from '../Cards/CardCarousel/images/dog-640.jpg';

function ClinicalService() {
    return (
        <section className={styles.container} >
            <div className={styles.box01} >
                <h2>
                    <span>SERVIÇOS CLÍNICOS</span>
                </h2>
                <p>Cuidados veterinários<br />
                    completos e especializados.
                </p>
                <p>
                    Cuide da saúde do seu pet<br />
                    com nossos serviços<br />
                    clínicos especializados.<br />
                    Profissionais dedicados,<br />
                    tecnologia, empatia e amor<br />
                    pelos animais.<br />
                </p>
            </div>
            <section className={styles.box03} >
                <Carousel>
                    
                        <div>
                            <Card_img_text
                                image={image1}
                                title={'limpeza de dente'}
                                text={'limpeza rapida'} />
                        </div>
                        <div>
                            <Card_img_text
                                image={image1}
                                title={'limpeza de dente'}
                                text={'limpeza rapida'} />
                        </div>
                        <div>
                            <Card_img_text
                                image={image1}
                                title={'limpeza de dente'}
                                text={'limpeza rapida'} />
                        </div>
                        <div>
                            <Card_img_text
                                image={image1}
                                title={'limpeza de dente'}
                                text={'limpeza rapida'} />
                        </div>
                   
                </Carousel>
            </section>
        </section>
    )
}


export default ClinicalService;