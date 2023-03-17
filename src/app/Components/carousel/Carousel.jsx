import React, { useState } from 'react'
import CarouselStyled from './Carousel.styled';
import { Carousel } from 'antd';

export default function CarouselComponent() {

  const [dotPosition, setDotPosition] = useState('bottom');

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <CarouselStyled>
      <Carousel dotPosition={dotPosition} dots={{ className: 'my' }}>
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
        <div>
          <h3 >2</h3>
        </div>
        <div>
          <h3 >3</h3>
        </div>
        <div>
          <h3 >4</h3>
        </div>
      </Carousel>
    </CarouselStyled>
  )
}
