
import WCA from '../img/wca.png'
import GR from '../img/gr.png'
import Digital from '../img/digital.png'
import Express from '../img/startup.png'
import Startup from '../img/startup.png'
import Swiver from '../img/swiver.png'
import WWS from '../img/wws.png'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  { useEffect, useState } from 'react'




const LogoCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 480) {
        setSlidesToShow(2);
      } else if (screenWidth <= 768) {
        setSlidesToShow(3);
      } else if (screenWidth <= 1024) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    };

    window.addEventListener('resize', updateSlidesToShow);

    // Initial setup
    updateSlidesToShow();

    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const logos = [
    { id: 1, image: WCA },
    { id: 2, image: GR },
    { id: 4, image: Startup },
    { id: 5, image: WWS },
    { id: 6, image: Swiver},
    { id: 7, image: Express },
    { id: 8, image: Digital }

  ];

  return (
    <Slider {...settings}>
      {logos.map((logo) => (
        <div key={logo.id} className='logo-container'>
          <img src={logo.image} alt={`Logo ${logo.id}`} className='logos' />
        </div>
      ))}
    </Slider>
  );
};
const Clients = () => {
  return (
    <div>
       <h2 className='sous-titre'>
                   <span className='line'> Our Clients </span>
                </h2>
      <LogoCarousel />
    </div>
  );
};



            


export default Clients