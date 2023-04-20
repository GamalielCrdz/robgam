import React from 'react'
import HomeStyled from './Productos.styled';
import imgPallets from '../../assets/icons/icon-pallets.svg';
import imgProductosPallets from '../../assets/images/img-productos-pallets.png';
import imgProductosElegir from '../../assets/images/img-productos-elegir.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { theme } from "antd";

export default function Productos() {
  const { token: { colorPrimary } } = theme.useToken();


  return (
    <HomeStyled colorPrimary={colorPrimary} >

      <div className='seccion header-robgam'>
        <div className='inner' >
          <div className='side header-title' >
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <h1>
                Nuestros
                <p> productos </p>
              </h1>
            </AnimationOnScroll>
          </div>

          <div className='side image-backgorund header' >
          </div>
        </div>
      </div>

      <div className='seccion info' >
        <div className='inner'>
          <div className='side' >
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <p className='text' >
                Las pallets de madera estandarizadas o hechas a medida, nuevas o reacondicionadas ofrecen una multitud de respuestas,combinan parámetros económicos y ecológicos. Son fácilmente reparables y recuperables al final de su vida útil; ofrecen una imagen de naturalidad y autenticidad en perfecta armonía con la sociedad actual, apegada a consideraciones medioambientales. Los pallets de madera son ampliamente utilizados por fabricantes y distribuidores.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className='seccion productos'>
        <div className='inner'>
          <div className="side texto">
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <div className="parrafo">
                <div className="img-icon">
                  <img src={imgPallets} alt="target" />
                </div>
                <h2>Pallets nuevos</h2>
                <p>
                  Tarimas especiales nacionales y para exportación, elaboradas de acuerdo con las especificaciones de nuestros clientes, contamos con tratamiento térmico.
                </p>
              </div>

              <div className="parrafo">
                <div className="img-icon">
                  <img src={imgPallets} alt="vision" />
                </div>
                <h2>Pallets reciclados</h2>
                <p>
                  Tarimas fabricadas con madera reciclada de 1era. Calidad, se elaboran de acuerdo con la especificación que se indique. Soporte estático de 1,000 kg a 1,500 kg o superior de soporte dinámico.
                </p>
              </div>

              <div className="parrafo">
                <div className="img-icon">
                  <img src={imgPallets} alt="vision" />
                </div>
                <h2>Pallets de madera</h2>
                <p>
                  Producto destinado para la protección de mercancías en almacenaje o transportación, fabricados de madera nueva, manejo montacargas o patín.
                </p>
              </div>

            </AnimationOnScroll>
          </div>

          <div className='side image-backgorund' >
          </div>
        </div>
      </div>

      <div className='seccion elegir'>
        <div className='inner'>
          <div className="side texto">
            <AnimationOnScroll animateIn="animate__fadeInUp" className='parrafo'  >
              <h1>Elegir nuestros pallets
                <br />
                de madera es elegir:
              </h1>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" className='parrafo'  >
              <div className="img-icon">
                <img src={imgPallets} alt="target" />
              </div>
              <p className='text' >
                La solución económica gracias a una materia prima competitiva.
              </p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" className='parrafo'  >
              <div className="img-icon">
                <img src={imgPallets} alt="vision" />
              </div>
              <p className='text' >
                La solución personalizada porque es posible hacer todo tipo de modelos de pallets sin ninguna restricción particular.
              </p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" className='parrafo'  >
              <div className="img-icon">
                <img src={imgPallets} alt="vision" />
              </div>
              <p className='text' >
                La solución medioambiental porque la madera es ecológica-material por excelencia, natural, renovable y reciclable que contribuye a la lucha contra el efecto invernadero.
              </p>
            </AnimationOnScroll>
          </div>

          <div className='side imagen' >
            <img className='img-vision-pallets' src={imgProductosElegir} alt="produc-header" />
          </div>
        </div>
      </div>

    </HomeStyled>
  )
}
