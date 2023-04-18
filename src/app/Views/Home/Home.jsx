import React from 'react'
import HomeStyled from './Home.styled'
import imgSobre from '../../assets/images/img-sobre.png';
import imgTarget from '../../assets/icons/target.svg';
import imgVision from '../../assets/icons/vision.svg';
import imgPallets from '../../assets/icons/icon-pallets.svg';
import imgProd from '../../assets/images/img-prod.png';
import imgConoce from '../../assets/images/img-conoce.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Button, theme } from "antd";

export default function Home() {
  const { token: { colorPrimary } } = theme.useToken();


  return (
    <HomeStyled colorPrimary={colorPrimary} >

      <div className='seccion somos' >
        <AnimationOnScroll initiallyVisible animatePreScroll={true} animateIn="animate__fadeInUp" className='inner' >
          <div className='home-text'>
            Somos ROBGAM,
            Somos tu mejor
            opción en tarimas
            multiusos para todo
            tipo de industria.
          </div>
        </AnimationOnScroll>
      </div>

      <div className="seccion sobre">
        <div className="inner">
          <div className="side image">
            <img src={imgSobre} className='robgam' alt="sobre" />
          </div>
          <div className="side texto">
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <div className="parrafo">
                <h1>Sobre Robgam</h1>
                <p className='text' >
                  Robgam Pallets es una empresa: Autodidacta, visionaria y apasionada; coloca a las personas en el centro de cada proyecto. Ha basado sistemáticamente su desarrollo enfatizando la interdependencia de los objetivos sociales, económicos y ambientales
                </p>
              </div>
              <div className="parrafo ">
                <div className="img-icon">
                  <img src={imgTarget} alt="target" />
                </div>
                <h2>Misión</h2>
                <p className='text' >
                  Resolver problemas para el transporte de productos, agilizando la logística de la industria. Todo ello con un enfoque de innovación y optimización de los recursos.
                </p>
              </div>
              <div className="parrafo">
                <div className="img-icon">
                  <img src={imgVision} alt="vision" />
                </div>
                <h2>Visión</h2>
                <p className='text' >
                  Desarrollar información logística para optimizar espacios y procesos a la industria
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className="seccion frase">
        <div className="down-side">
          <AnimationOnScroll animateIn="animate__fadeInUp" >
            <div>
              <h1>
                "En ROBGAM Pallets solo hay un jefe. <p>El cliente"</p>
              </h1>
              <p className='cita' >-Roberto Gamboa / Fundador CEO</p>
            </div>
          </AnimationOnScroll>

        </div>
      </div>

      <div className="seccion productos">
        <div className='inner' >
          <div className="side products-list" >

            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <h1>Nuestros Productos:</h1>
            </AnimationOnScroll>

            <AnimationOnScroll className='producto' animateIn="animate__fadeInUp" >
              <div className='producto-img'>
                <img src={imgPallets} alt='prod-1' />
              </div>
              <div className='producto-desc'>
                <h2>
                  Tarimas 2 entradas
                </h2>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll className='producto' animateIn="animate__fadeInUp" >
              <div className='producto-img'>
                <img src={imgPallets} alt='prod-1' />
              </div>
              <div className='producto-desc'>
                <h2>
                  Tarimas 4 entradas
                </h2>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll className='producto' animateIn="animate__fadeInUp" >
              <div className='producto-img'>
                <img src={imgPallets} alt='prod-1' />
              </div>
              <div className='producto-desc'>
                <h2>
                  Tarima Stringer sin Saque
                </h2>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll className='producto' animateIn="animate__fadeInUp" >
              <div className='producto-img'>
                <img src={imgPallets} alt='prod-1' />
              </div>
              <div className='producto-desc'>
                <h2>
                  Tarimas recicladas
                </h2>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll className='producto' animateIn="animate__fadeInUp" >
              <div className='producto-img'>
                <img src={imgPallets} alt='prod-1' />
              </div>
              <div className='producto-desc'>
                <h2>
                  Tarimas con especificasiones especiales
                </h2>
              </div>
            </AnimationOnScroll>
          </div>

          <div className="side image-backgorund" >
          </div>
        </div>
      </div>

      <div className="seccion conoce">
        <div className='inner'>
          <div className="image side">
            <img src={imgConoce} alt="conoce" />
          </div>
          <div className="text side">
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <h1>Conoce más sobre nosotros y también del porqué somos una empresa de confianza</h1>
              <Button type='primary' size='large' >Conoce más</Button>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

    </HomeStyled>
  )
}
