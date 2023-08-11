import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

export const CarouselBody = ({children}) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel controls={false} activeIndex={index} onSelect={handleSelect} variant="dark" fade>
      {
        children.map((child) =>(
          <Carousel.Item key={child.alt}>
            <img
              className="d-block w-100"
              src={child.url}
              alt={child.alt}
            />
            <Carousel.Caption className='text-white h-100 d-flex justify-content-center align-items-center'>
              <div>
                <h3 className='title'>{child.header}</h3>
                <p>{child.body}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
      
    </Carousel>
  )
}
