'use client';

import Slider from 'react-slick';
import { Slide } from '@/components/Slide';

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    speed: 3000,
  };

  const slideData = [
    {
      id: 0,
      img: '/banner1.jpg',
      title: 'Camping',
      mainTitle: 'Camping',
      price: '$55',
    },
    {
      id: 1,
      img: '/banner3.jpg',
      title: 'Camping in nature',
      mainTitle: 'Camping',
      price: '$35',
    },
    {
      id: 2,
      img: '/banner4.jpg',
      title: 'Camping in forest',
      mainTitle: 'Camping',
      price: '$99',
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((i) => (
            <Slide
              key={i.id}
              img={i.img}
              title={i.title}
              mainTitle={i.mainTitle}
              price={i.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
