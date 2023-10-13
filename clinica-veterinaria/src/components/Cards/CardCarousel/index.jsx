import styles from './CardCarousel.module.css';
import Card_img_text from "../Card_img_text";

import image1 from './images/dog-640.jpg';

function CardCarousel() {
    return (
        <div className={styles.container}>
            <div>
                <Card_img_text 
                    image={image1} 
                    title={'limpeza de dente'} 
                    text={'limpeza rapida'}/>
             </div>
             <div>
                <Card_img_text 
                    image={image1} 
                    title={'limpeza de dente'} 
                    text={'limpeza rapida'}/>
             </div>
             <div>
                <Card_img_text 
                    image={image1} 
                    title={'limpeza de dente'} 
                    text={'limpeza rapida'}/>
             </div>
             <div>
                <Card_img_text 
                    image={image1} 
                    title={'limpeza de dente'} 
                    text={'limpeza rapida'}/>
             </div>
             <div>
                <Card_img_text 
                    image={image1} 
                    title={'limpeza de dente'} 
                    text={'limpeza rapida'}/>
             </div>
        
        </div>
    )
}

export default CardCarousel;