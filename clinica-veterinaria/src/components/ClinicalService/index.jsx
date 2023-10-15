import Card_img_text from '../Cards/Card_img_text';
import Carousel from '../Carousel';
import s from './ClinicalService.module.css';

import image1 from '../Cards/CardCarousel/images/dog-640.jpg';

function ClinicalService() {
    return (
        <section className={s.container} >
            <div className={s.box01} >
                <h2>
                    <span>SERVIÇOS CLÍNICOS</span>
                </h2>
                <p className={s.text_box1}>
                    Carinho e cuidado para o seu
                    pet ficar feliz da vida.
                </p><br />
                <p className={s.text1_box1}>
                    Cuide da saúde do seu pet
                    com nossos serviços
                    clínicos especializados.
                    Profissionais dedicados,
                    tecnologia, empatia e amor
                    pelos animais.<br />
                </p>
            </div>
            <section className={s.box03} >
                <Carousel>

                    <div>
                        <Card_img_text
                            image={image1}
                            text={'Atenção e cuidado nos procedimentos.'} />
                    </div>
                    <div>
                        <Card_img_text
                            image={image1}
                            title={'LIMPEZA DE DENTE'}
                            text={'Bom Hálito e Boca Saudável'} />
                    </div>
                    <div>
                        <Card_img_text
                            image={image1}
                            title={'VACINAÇÃO'}
                            text={'Vacinação Para Seu Pet'} />
                    </div>
                    <div>
                        <Card_img_text
                            image={image1}
                            title={'EXAMES CLÍNICOS'}
                            text={'Exames Precisos, e Confiáveis'} />
                    </div>

                </Carousel>
            </section>
        </section>
    )
}


export default ClinicalService;