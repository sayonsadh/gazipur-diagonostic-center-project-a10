import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 mx-auto"
      src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
      alt=""
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 mx-auto"
      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
      alt=""
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50 mx-auto"
      src="https://images.unsplash.com/photo-1561328399-f94d2ce78679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt=""
    />
  </Carousel.Item>
</Carousel> 
        </>
    );
};

export default Banner;