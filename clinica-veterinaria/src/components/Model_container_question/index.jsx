import { useState } from 'react';
import s from './Model_container_question.module.css';

function Model_container_question() {

    const [showModal, setShowModal] = useState(false)
    const [showModal_01, setShowModal_01] = useState(false)
    const [showModal_02, setShowModal_02] = useState(false)
    const [showModal_03, setShowModal_03] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
        setShowModal_01(false)
        setShowModal_02(false)
        setShowModal_03(false)
    }
    const toggleModal_01 = () => {
        setShowModal_01(!showModal_01)
        setShowModal(false)
        setShowModal_02(false)
        setShowModal_03(false)
    }
    const toggleModal_02 = () => {
        setShowModal_02(!showModal_02)
        setShowModal(false)
        setShowModal_01(false)
        setShowModal_03(false)
    }
    const toggleModal_03 = () => {
        setShowModal_03(!showModal_03)
        setShowModal(false)
        setShowModal_01(false)
        setShowModal_02(false)
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
                    <button className={s.box1} onClick={toggleModal}>
                        <div className={s.box1_1}>
                            <span className={showModal === false ? s.box1_span : s.box1_span_show} >+</span>
                            <span className={showModal === false ? s.box1_span1 : s.box1_span1_show} >-</span>
                        </div>
                        <div className={s.box1_2}>
                            <p className={s.box1_text}>Quais são os horários de funcionamento da clínica?</p>
                        </div>
                    </button>
                    <div className={showModal === false ? s.box2 : s.box2_show}>
                        <h3>Nossa clínica está aberta nos seguintes horários:</h3><br/>
                        <p><strong>Segunda a Sexta: </strong>das 08h às 18h</p>
                        <p><strong>Sábados: </strong>das 08h às 16h</p>
                        <p><strong>Domingos: </strong>das 09h às 13h</p>
                    </div>

                    <button className={s.box1} onClick={toggleModal_01}>
                        <div className={s.box1_1}>
                            <span className={showModal_01 === false ? s.box1_span : s.box1_span_show} >+</span>
                            <span className={showModal_01 === false ? s.box1_span1 : s.box1_span1_show} >-</span>
                        </div>
                        <div className={s.box1_2}>
                            <p className={s.box1_text}>Como posso agendar uma consulta para o meu pet?</p>
                        </div>
                    </button>
                    <div className={showModal_01 === false ? s.box2 : s.box2_show}>
                        <h3>Agende uma consulta na nossa clínica ou através do nosso WhatsApp:</h3><br/>
                        <p><strong>WhatsApp </strong>(14) 99999-8888</p>
                        <p><strong>Nosso Endereço: </strong></p>
                        <p><strong>Rua: </strong>modelo <strong>Nº </strong>10 <strong>Bairro: </strong> Centro</p>
                    </div>

                    <button className={s.box1} onClick={toggleModal_02}>
                        <div className={s.box1_1}>
                            <span className={showModal_02 === false ? s.box1_span : s.box1_span_show} >+</span>
                            <span className={showModal_02 === false ? s.box1_span1 : s.box1_span1_show} >-</span>
                        </div>
                        <div className={s.box1_2}>
                            <p className={s.box1_text}>Como devo proceder em caso de emergências fora do horário de atendimento?</p>
                        </div>
                    </button>
                    <div className={showModal_02 === false ? s.box2 : s.box2_show}>
                        <p>“Em caso de emergências fora do horário de atendimento, você pode<br/>
                            entrar em contato pelo <strong>WhatsApp </strong>para que nossa equipe possa monitorar a situação.</p> 
                    </div>

                    <button className={s.box1} onClick={toggleModal_03}>
                        <div className={s.box1_1}>
                            <span className={showModal_03 === false ? s.box1_span : s.box1_span_show} >+</span>
                            <span className={showModal_03 === false ? s.box1_span1 : s.box1_span1_show} >-</span>
                        </div>
                        <div className={s.box1_2}>
                            <p className={s.box1_text}>Como posso agendar uma consulta para o meu pet?</p>
                        </div>
                    </button>
                    <div className={showModal_03 === false ? s.box2 : s.box2_show}>
                        <h3>Agende uma consulta na nossa clínica ou através do nosso WhatsApp:</h3><br/>
                        <p><strong>WhatsApp </strong>(14) 99999-8888</p>
                        <p><strong>Nosso Endereço: </strong></p>
                        <p><strong>Rua: </strong>modelo <strong>Nº </strong>10 <strong>Bairro: </strong> Centro</p>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Model_container_question;