import React from 'react';

import  Carousel  from 'react-bootstrap/Carousel';
import Image from '../../assets/img/slider-1.png';



const Home = () => {
  return (
      <Carousel id='home' className='Carrusel'>
        <Carousel.Item className='Item'>
          <img className="imagenSlider" src={Image} alt="First slide" />
          <Carousel.Caption className='Contenido'>
            <h3>Sed ut perspiciatis<br></br>unde omnis iste natus</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error<br></br>sit voluptatem accusantium doloremque.</p>
            <a href="www.google.com" className="boton">Read More</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='Item'>
          <img className="imagenSlider" src={Image} alt="Second slide" />
          <Carousel.Caption className='Contenido'>
            <h3>Second slide label</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
            <a href="www.google.com" className="boton">Read More</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='Item'>
          <img className="imagenSlider" src={Image} alt="Third slide" />
          <Carousel.Caption className='Contenido'>
            <h3>Third slide label</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
            <a href="www.google.com" className="boton">Read More</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}

export default Home;

