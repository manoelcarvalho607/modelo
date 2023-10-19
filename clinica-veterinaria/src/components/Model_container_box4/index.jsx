import s from './Model_container_box4.module.css';
import { Link } from 'react-router-dom';


function Model_container_box4() {




    return (
        <section className={s.container}>
            <div className={s.container_one}>
                <div className={s.box_title}>
                    <h2><span>CONTATOS</span></h2>
                </div>
                <div className={s.box}>
                    <div className={s.box_one}>
                        <div className={s.box2}>
                            <Link>
                                <figure className={s.box_figure}>
                                    <div
                                        title='Telefone fixo'
                                        className={s.box_img01}
                                    >
                                    </div>
                                </figure>
                            </Link>
                            <p className={s.box_text3} >
                                (14) 44999-9999
                            </p>
                        </div>
                        <div className={s.box2}>
                            <Link>
                                <figure className={s.box_figure}>
                                    <div
                                        title='Localização de Endereço'
                                        className={s.box_img02}
                                    >
                                    </div>
                                </figure>
                            </Link>
                            <p className={s.box_text2} >
                                Av. modelo Nº 000 - Centro,Bauru - SP, 0000-000
                            </p>
                        </div>
                    </div>
                    <div className={s.box_one}>
                        <div className={s.box1}>
                            <Link 
                            to='https://api.whatsapp.com/send?phone=5514998269848&            text=vaidedigital%20-%20%20Suporte%20de%20atendimento%20ao%20cliente%0A%0A%20' target='_black'>
                                <figure className={s.box_figure2}>
                                    <div
                                        title='Link WhatsApp'
                                        className={s.box_img03}
                                    >
                                    </div>
                                </figure>
                            </Link>
                            <p className={s.box_text3} >
                                (14) 99999-0000
                            </p>
                        </div>
                        <div className={s.box1}>
                            <Link to='https://www.instagram.com/vaidedigital/?igshid=YWYwM2I1ZDdmOQ%3D%3D' target='_black'>
                                <figure className={s.box_figure}>
                                    <div
                                        title='Link Instagram'
                                        className={s.box_img04}
                                    >
                                    </div>
                                </figure>
                            </Link>
                            <p className={s.box_text3} >
                                @ Instagram
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Model_container_box4;