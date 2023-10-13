import Slider from 'react-slick';
import "./carousel.css";

import { useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons';
// import CardCarousel from '../Cards/CardCarousel';
import Card_img_text from '../Cards/Card_img_text';
import image1 from '../Cards/CardCarousel/images/dog-640.jpg';
export default function Carousel_slide() {

  const [sliderRef, setSliderRef] = useState(null);


  const sliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
         slidesToShow: 1,
        }
       }
    ]
  }


  return (
    <div className='content'>
      < div className='controls' >
        < button onClick={sliderRef?.slickPrev}> 
          {/* < FaChevronLeft />  */}
        </ button > 
        < button onClick={sliderRef?.slickNext}> 
          {/* < FaChevronRight />  */}
        </ button >
      </ div >

      <Slider  ref = { setSliderRef } {...sliderSettings}>
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
      </Slider>
    </div>
  )
}


