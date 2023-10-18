import s from './Model_container_box4.module.css';
import { Link } from 'react-router-dom';

import img_end from './images/icon-local.png';
import img_phone from './images/icon-phone.png';
import img_zap from './images/icon-whatsapp.png';
import img_instagram from './images/icon-instagram.png';

function Model_container_box4() {




    return (
        <section className={s.container}>
            <div className={s.container_one}>
                <div>
                    <h2><span>CONTATOS</span></h2>
                </div>
                <div className={s.box}>
                    <div className={s.box_one}>
                        <div className={s.box2}>
                            <Link>
                                <figure className={s.box_figure2}>
                                    <img
                                        className={s.imgCard}
                                        src={img_phone}
                                        alt={'imagem de telefone de contato'}
                                    />
                                </figure>
                            </Link>
                            <p className={s.box_text3} >
                                (14) 44999-9999
                            </p>
                        </div>
                        <div className={s.box2}>
                            <Link>
                                <figure className={s.box_figure2}>
                                <img
                                        className={s.imgCard}
                                        src={img_end}
                                        alt={'imagem de localização de endereço'}
                                    />
                                </figure>
                            </Link>
                            <p className={s.box_text2} >
                                Av. modelo Nº 000 - Centro,Bauru - SP, 0000-000
                            </p>
                        </div>
                    </div>
                    <div className={s.box_one}>
                        <div className={s.box1}>
                            <Link>
                                <figure className={s.box_figure}>
                                <img
                                        className={s.imgCard}
                                        src={img_zap}
                                        alt={'imagem de contato whatsapp'}
                                    />
                                </figure>
                            </Link>
                            <p className={s.box_text} >
                                (14) 99999-0000
                            </p>
                        </div>
                        <div className={s.box1}>
                            <Link>
                                <figure className={s.box_figure}>
                                <img
                                        className={s.imgCard}
                                        src={img_instagram}
                                        alt={'imagem de icon instagram'}
                                    />
                                </figure>
                            </Link>
                            <p className={s.box_text} >
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