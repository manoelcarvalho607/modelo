import Slider from "react-slick";
import "./carousel.css";
import styles from './Carousel.module.css';
import PropTypes from 'prop-types';

Carousel.propTypes = {
    children: PropTypes.object
}

function Carousel({children}) {

    const settings = {
        autoplay: true,
        autoplaySpeed: 6000,
        variableWidth: 250, 
        centerPadding: 30,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className={styles.carousel}>
            <Slider  {...settings}>
                {children}
            </Slider>
        </div>
      
    )
}

export default Carousel;