import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  return (
    <Carousel>
      <div>
        <img src="image-1.jpg" alt="Landscape 1" />
        <h1>Стремитесь не к успеху, а к ценностям, которые он дает</h1>
      </div>
      <div>
        <img src="image-2.jpg" alt="Landscape 2" />
        <h1>Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.</h1>
      </div>
      <div>
        <img src="image-3.jpg" alt="Landscape 3" />
        <h1>Лучшая месть – огромный успех.</h1>
      </div>
    </Carousel>
  );
};

export default Slider;