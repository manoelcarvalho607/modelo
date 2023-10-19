import Card_img_text from '../Cards/Card_img_text';
import Carousel from '../Carousel';
import s from './Model_container_box2.module.css';
import image1 from '../Cards/CardCarousel/images/dog-640.jpg';

//style={{ backgroundImage: `url(${img_bottom})`, width: '100%' }}

function Model_container_box2() {
    return (
        <div className={s.container_one}>
            <section
                className={s.container}  >
                <div id='bem-estar' className={s.box01} >
                    <h2 >
                        <span>BEM-ESTAR ANIMAL</span>
                    </h2>
                    <p className={s.text_box1}>
                        Carinho e cuidado para o seu
                        pet ficar feliz da vida.
                    </p><br />
                    <p className={s.text1_box1}>
                        Proporcione conforto para
                        seu pet com nosso banho e
                        tosa especializado. Agende
                        agora mesmo e veja seu
                        amigo peludo cheio de
                        alegria.<br />
                    </p>
                </div>
                <section className={s.box03} >
                    <Carousel>
                        <div>
                            <Card_img_text
                                image={image1}
                                // title={'limpeza de dente'}
                                text={'Banho e Mimo para Seu Pet ficar Uma Fofura'} />
                        </div>
                        <div>
                            <Card_img_text
                                image={image1}
                                // title={'limpeza de dente'}
                                text={'Higienização e Cuidado'} />
                        </div>
                        <div>
                            <Card_img_text
                                image={image1}
                                // title={'limpeza de dente'}
                                text={'Hotel Pet'} />
                        </div>
                    </Carousel>
                </section>
            </section>

        </div>
    )
}


export default Model_container_box2;