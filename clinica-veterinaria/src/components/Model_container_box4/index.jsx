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
                                {/* <figure className={s.box_figure2}>
                                <img
                                        title='Localização'
                                        className={s.img_box4}
                                        src={img_end}
                                        alt={'imagem de localização de endereço'}
                                    />
                                </figure> */}
                            </Link>
                            <p className={s.box_text2} >
                                Av. modelo Nº 000 - Centro,Bauru - SP, 0000-000
                            </p>
                        </div>
                    </div>
                    <div className={s.box_one}>
                        <div className={s.box1}>
                            <Link>
                                {/* <figure className={s.box_figure}>
                                <img
                                        title='WhatsApp'
                                        className={s.img_box4}
                                        src={img_zap}
                                        alt={'imagem de contato whatsapp'}
                                    />
                                </figure> */}
                            </Link>
                            <p className={s.box_text} >
                                (14) 99999-0000
                            </p>
                        </div>
                        <div className={s.box1}>
                            <Link>
                                {/* <figure className={s.box_figure}>
                                <img
                                        title='Instagram'
                                        className={s.img_box4}
                                        src={img_instagram}
                                        alt={'imagem de icon instagram'}
                                    />
                                </figure> */}
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