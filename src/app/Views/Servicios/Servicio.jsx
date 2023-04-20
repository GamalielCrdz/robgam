import React from 'react'
import HomeStyled from './Servicio.styled';
import imgHeader from '../../assets/images/img-servicios-header.png';
import imgProductosReparacion from '../../assets/images/img-servicios-reparacion.png';

import imgProductosPapel from '../../assets/images/img-servicios-papel.png';
import imgProductosMadera from '../../assets/images/img-servicios-madera.png';
import imgProductosMetal from '../../assets/images/img-servicios-metal.png';
import imgProductosPlast from '../../assets/images/img-servicios-plast.png';
import imgProductosCarton from '../../assets/images/img-servicios-carton.png';
import imgProductosScrap from '../../assets/images/img-servicios-scrap.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { theme } from "antd";

export default function Nuestro() {
  const { token: { colorPrimary } } = theme.useToken();


  return (
    <HomeStyled colorPrimary={colorPrimary} >

      <div className='seccion header-robgam'>
        <div className='inner' >
          <div className='side header-title' >
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <h1>
                Nuestros
                <p> Servicios </p>
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
                Las pallets de madera estandarizadas o hechas a medida, nuevas o reacondicionadas ofrecen una multitud de respuestas. Combinan parámetros económicos y ecológicos; nuestros pallets se producen a partir de un recurso renovable. Son fácilmente reparables y recuperables al final de su vida útil. Ofrecen una imagen de naturalidad y autenticidad en perfecta armonía con la sociedad actual, apegada a consideraciones medioambientales. La facilidad con la que se puede utilizar la madera permite producir todo tipo de pallets.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className='seccion productos'>
        <div className='inner reverse'>
          <div className='side image-backgorund' >
          </div>

          <div className="side texto">
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <h1 className='title' >Servicios de reparación de tarimas</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <p className='text'>
                Nuestro servicio de tarimas es 360°, gracias a que contamos con reparación de tarimas, con lo que podrás ahorrar hasta un 40% en costos de operación y almacenaje.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <p className='text' >
                Beneficio empresa-medio ambiente con la reparación de tus tarimas, para que no tengas la necesidad de comprar tarimas nuevas. Reciclamos el material que podamos rescatar de tus tarimas y hacemos la reparación con nuestros materiales y te entregamos un producto renovado al 100%.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <p className='text' >
                Hacemos la recolección de tus tarimas dañadashasta tu empresa y te los entregamos completamente reacondicionados, así evitando que compres pallets nuevos cada vez que se dañen.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className='seccion recolectamos'>
        <div className='inner'>
          <div className="side">
            <div className="texto">
              <div className="parrafo" >
                <AnimationOnScroll animateIn="animate__fadeInUp" >
                  <h1>Recolectamos material no
                    <br />
                    tóxico como:
                  </h1>
                </AnimationOnScroll>
              </div>

              <div className="parrafo" >
                <AnimationOnScroll animateIn="animate__fadeInUp" >
                  <p className='text' >
                    Tenemos la infraestructura adecuada para recolectar los desechos industriales no tóxicos que nuestros clientes requieran.
                    <br />
                    Somos una empresa socialmente responsable con el medio ambiente, por lo que buscamos que todos los desechos sean 100% reciclados y aprovechados de la mejor manera.
                  </p>
                </AnimationOnScroll>
              </div>
            </div>

            <div className='pictures-container' >
              <div className="picture">
                <img src={imgProductosMadera} alt="madera" />
                <div className='picture-title' >Madera</div>
              </div>
              <div className="picture">
                <img src={imgProductosPapel} alt="papel" />
                <div className='picture-title black' >Papel</div>
              </div>
              <div className="picture">
                <img src={imgProductosMetal} alt="metal" />
                <div className='picture-title' >Metal</div>
              </div>
              <div className="picture">
                <img src={imgProductosPlast} alt="plastico" />
                <div className='picture-title black' >Plástico</div>
              </div>
              <div className="picture">
                <img src={imgProductosCarton} alt="carton" />
                <div className='picture-title' >Cartón</div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div className='seccion servicios'>
        <div className="inner">
          <div className='side'>
            <div className="texto">
              <AnimationOnScroll animateIn="animate__fadeInUp" >
                <div className="parrafo">
                  <h1>Servicios de <br /> recolección de SCRAP</h1>
                  <p className='text'>
                    Contamos con el servicio integral de recolección de scrapt personalizado según sean tus necesidades. Tenemos la infraestructura adecuada para recolectar los desechos industriales no tóxicos que nuestros clientes requieran.
                  </p>
                  <p className='text'>
                    Somos una empresa socialmente responsable con el medio ambiente, por lo que buscamos que todos los desechos sean 100% reciclados y aprovechados de la mejor manera
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
            <div className='image-container' >
              <img src={imgProductosScrap} alt="scrap" />
            </div>
          </div>
        </div>
      </div>

    </HomeStyled>
  )
}
