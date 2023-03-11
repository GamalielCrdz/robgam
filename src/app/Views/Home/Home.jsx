import React, { useRef } from 'react'
import HomeStyled from './Home.styled'
import { CSSTransition } from 'react-transition-group';

export default function Home() {
  const nodeRef = useRef(null);

  return (
    <HomeStyled>
      <div className='somos' >
        <div className='home-text'>
          Somos ROBGAM,
          Somos tu mejor
          opción en tarimas
          multiusos para todo
          tipo de industria.
        </div>
      </div>
    </HomeStyled>
  )
}
