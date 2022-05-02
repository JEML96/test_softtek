import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='ContainerImgSlid'>
          <img
            className='d-block w-100'
            src={require('../../Img/img1.jpg')}
            alt='First slide'
          />
        </div>
        <Carousel.Caption>
          <h3 className='text-dark'>First Picture</h3>
          <p className='text-dark'>
            A picture of someone dancing in front of softtek.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='ContainerImgSlid'>
          <img
            className='d-block w-100'
            src={require('../../Img/img2.jpg')}
            alt='Second slide'
          />
        </div>

        <Carousel.Caption>
          <h3 className='text-dark'>Second picture</h3>
          <p className='text-dark'>A low resolution picture of softtek :).</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='ContainerImgSlid'>
          <img
            className='d-block w-100'
            src={require('../../Img/img3.jpg')}
            alt='Third slide'
          />
        </div>

        <Carousel.Caption>
          <h3 className='text-dark'>Third picture</h3>
          <p className='text-dark'>
            Kermit the Frog dancing in front of softtek
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
