import React, { useState } from 'react'
import CarouselStyled from './Carousel.styled';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {

  return (
    <CarouselStyled>
      <Carousel showThumbs={false}>
        <div className='item-container' >
          <div className="item">
            <div className="item-text">
              “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna”
            </div>
            <div className="item-footer">
              <div className="item-footer-name" >
                John Doe
              </div>
              <div className="item-footer-company" >
                Company
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-text">
              “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna”
            </div>
            <div className="item-footer">
              <div className="item-footer-name" >
                John Doe
              </div>
              <div className="item-footer-company" >
                Company
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-text">
              “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna”
            </div>
            <div className="item-footer">
              <div className="item-footer-name" >
                John Doe
              </div>
              <div className="item-footer-company" >
                Company
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </CarouselStyled>
  )
}
