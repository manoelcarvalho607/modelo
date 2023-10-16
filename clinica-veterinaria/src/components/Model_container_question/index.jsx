import { useState } from 'react';
import s from './Model_container_question.module.css';

function Model_container_question() {

    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(!showModal)
        console.log("teste modal: " + showModal)
    }

    return (
        <div className={s.container}>
            <div className={s.box}>
                <section>
                    <div className={s.box_title}>
                        <h2>
                            <span>PERGUNTAS FREQUENTES</span>
                        </h2>
                    </div>
                    <button className={s.box1}  onClick={toggleModal}>
                        <div className={s.box1_1}>
                            <span className={showModal === false ? s.box1_span : s.box1_span_show} >+</span>
                            <span className={showModal === false ? s.box1_span1 : s.box1_span1_show} >-</span>
                        </div>
                        <div className={s.box1_2}>
                             <p className={s.box1_text}>Quais são os horários de funcionamento da clínica?</p>
                        </div>
                    </button>
                    <div className={showModal === false ? s.box2 : s.box2_show}>
                        <p>paragrafo de teste desenvolvimento </p>
                        <p>paragrafo de teste desenvolvimento </p>
                        <p>paragrafo de teste desenvolvimento </p>
                        <p>paragrafo de teste desenvolvimento </p>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Model_container_question;