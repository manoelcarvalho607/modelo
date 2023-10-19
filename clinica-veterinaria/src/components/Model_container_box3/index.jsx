
import s from './Model_container_box3.module.css';

import image1 from './images/dog-640.jpg';

function Model_container_box3() {
    return (
        <section className={s.container} >
            <div className={s.forever_box}>
                <div className={s.box01} >
                    <h2>
                        <span>SOBRE NÓS</span>
                    </h2>
                    <p className={s.text1_box1}>
                        Nosso objetivo é sempre oferecer
                        um excelente atendimento com
                        profissionalismo e amor.

                    </p><br />
                    <p className={s.text1_box1}>
                        Cuidar de um pet é o que
                        amamos fazer. E pra isso
                        nossa equipe sempre estar
                        se especializando para poder
                        cuidar cada vez melhor do seu
                        melhor amigo.<br />
                    </p>
                </div>

                <figure>
                    <img
                        className={s.image1}
                        src={image1}
                        alt={'Imagem de um cachorro'}
                    />
                </figure>
            </div>
        </section>
    )
}


export default Model_container_box3;