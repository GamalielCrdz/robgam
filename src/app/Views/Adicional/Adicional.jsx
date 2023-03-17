import React from 'react'
import HomeStyled from './Adicional.styled';
import imgHeader from '../../assets/images/img-inf.adicional-header.png';
import imgProductosEconomia from '../../assets/images/img-inf.adicional-economia.png';
import imgProductosScrap from '../../assets/images/img-servicios-scrap.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Collapse, Space, theme } from "antd";
import Carousel from '../../Components/carousel/Carousel';
const { Panel } = Collapse;

export default function Home() {
  const { token: { colorPrimary } } = theme.useToken();


  return (
    <HomeStyled colorPrimary={colorPrimary} >

      <div className='seccion seccion-column nuestro'>
        <div className='seccion-row img-header'>
          <div className='title' >
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <h1>
                Información
                <p> adicional </p>
              </h1>
            </AnimationOnScroll>
          </div>
          <div className='image-container' >
            <img src={imgHeader} alt="produc-header" />
          </div>
        </div>
        <div className='seccion-row' >
          <div className='text'>
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <p>
                Queremos brindarte más información de la cual podrás ver en esta sección para qué puedas tener la confianza de comparar nuestros productos o contratar alguno de nuestros servicios, Si neceitas más información no dudes en comunicarte con nosotros, estamos para ayudarte.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className='seccion seccion-column productos'>
        <div className='seccion-row img-header productos'>
          <div className='image-container' >
            <img src={imgProductosEconomia} alt="produc-header" />
          </div>
          <div className="sobre-side texto">
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <div className="parrafo">
                <h2>Economía Circular</h2>
                <p className='parrafo-text'>
                  La opción más sustentable en Pallets de madera En Robgam Pallets somos productivos ya que tomamos medidas para asegurar el abastecimiento de las materias primas en el futuro y aseguramos la trazabilidad a largo plazo.
                </p>
                <p className='parrafo-text'>
                  Continuamos trabajando en la mejora de la calidad de los pallets fomentando la innovación en áreas como el diseño de pallets y la fabricación. Nuestro objetivo es el de mejorar las opciones existentes de embalajes de madera y explorar nuevas vías alternativas.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <div className="parrafo">
                <h2>La madera de nuestros pallets es debidamente tratada para dar certeza a tus productos de exportación.</h2>
                <p className='parrafo-text'>
                  La opción más sustentable en Pallets de madera En Robgam Pallets somos productivos ya que tomamos medidas para asegurar el abastecimiento de las materias primas en el futuro y aseguramos la trazabilidad a largo plazo.
                </p>
                <p className='parrafo-text'>
                  Continuamos trabajando en la mejora de la calidad de los pallets fomentando la innovación en áreas como el diseño de pallets y la fabricación.
                </p>
                <p className='parrafo-text'>
                  Nuestro objetivo es el de mejorar las opciones existentes de embalajes y pallets de madera y explorar nuevas vías alternativas.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className='seccion seccion-column recolectamos'>
        <div className='seccion-row img-header elegir recolectamos'>

          <div className="sobre-side texto">
            <div className="parrafo" >
              <h1>Preguntas frecuentes</h1>
            </div>

            <div className="parrafo" >
              <AnimationOnScroll animateIn="animate__fadeInUp" >
                <p>
                  Puedes revisar algunas de las preguntas qué nuestros clientes nos han hecho para solucionar sus dudas, o bien si prefieres puedes contactarnos para ayudarte a resolverlas.
                </p>
              </AnimationOnScroll>
            </div>

            <div className='collapse-container' >
              <Space direction="vertical">
                <Collapse defaultActiveKey={['1']}>
                  <Panel header="¿Tarimas nuevas o recicladas?" key="1">
                    <div className="parrafo" >
                      <p>Nuestras opciones de tarimas nuevas y recicladas se adaptan a tus necesidades. Ya sea que necesites ahorrar en costos operativos o que tus necesidades requieran de un mayor soporte en el material a transportar y/o almacenar, ROBGAM tiene lo que necesitas.</p>
                    </div>
                  </Panel>
                </Collapse>
                <Collapse>
                  <Panel header="¿Cuáles son las diferencias entre adquirir una tarima nueva y una reciclada?" key="1">
                    <p>texto</p>
                  </Panel>
                </Collapse>
                <Collapse >
                  <Panel header="¿Los enviós se realizan a toda la Rep. Mexicana?" key="1">
                    <p>texto</p>
                  </Panel>
                </Collapse>
                <Collapse >
                  <Panel header="¿Cuál es el máximo de pedidos qué puedo realizar?" key="1">
                    <p>texto</p>
                  </Panel>
                </Collapse>
                <Collapse >
                  <Panel header="¿Qué tipo de transporte cuentan para el traslado de pallets?" key="1">
                    <p>texto</p>
                  </Panel>
                </Collapse>
                <Collapse >
                  <Panel header="¿Cual es el tiempo máximo para realizar una entrega?" key="1">
                    <p>texto</p>
                  </Panel>
                </Collapse>
              </Space>

            </div>
          </div>
        </div>
      </div>

      <div className='seccion seccion-column testimonios '>
        <div className='seccion-row img-header testimonios'>
          <h1>Nuestros testimonios</h1>
          <p className='parrafo-text'>
            Conoce algunas de las opiniones de nuestros clientes qué han quedado 
            <br />
            satisfechos con nuestros productos y servicios.
          </p>
        </div>
        <div className='seccion-row img-header testimonios'>
          <Carousel />
        </div>
      </div>

    </HomeStyled>
  )
}
