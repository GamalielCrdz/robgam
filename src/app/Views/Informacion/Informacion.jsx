import React from 'react'
import HomeStyled from './Informacion.styled';
import imgHeader from '../../assets/images/img-contacto-header.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { theme, Card, Input, Button } from "antd";

const { TextArea } = Input;

export default function Informacion() {
  const { token: { colorPrimary } } = theme.useToken();


  return (
    <HomeStyled colorPrimary={colorPrimary} >

      <div className='seccion seccion-column nuestro'>
        <div className='seccion-row img-header'>
          <div className='title' >
            <AnimationOnScroll animateIn="animate__fadeInUp" >
              <h1>
                Información de
                <p> contacto </p>
              </h1>
            </AnimationOnScroll>
          </div>
          <div className='image-container' >
            <img src={imgHeader} alt="produc-header" />
          </div>
        </div>
      </div>

      <div className='seccion seccion-column'>
        <div className='seccion-row contact-cards'>
          <Card title='Dirección Oficina' bordered={false} style={{ width: 300, textAlign: 'left', height: 150, margin: 10 }} >
            <p>Aguazul 654 C.P.66084 Col.</p>
          </Card>
          <Card title='Redes sociales' bordered={false} style={{ width: 300, textAlign: 'left', height: 150, margin: 10 }} >
            <p>instagram / @robgam</p>
            <p>facebook / @robgam</p>
          </Card>
          <Card title='Teléfono y correo' bordered={false} style={{ width: 300, textAlign: 'left', height: 150, margin: 10 }} >
            <p>
              <a href="tel:8113060168">+52 81 130 601 68</a>
            </p>
            <p>
              <a href="mailto: ventas@robgam.com.mx">ventas@robgam.com.mx</a>
            </p>
          </Card>
        </div>
      </div>

      <div className='seccion seccion-column contacta'>
        <div className='seccion-row title'>
          <div className="parrafo" >
            <h1>Mapa de nuestra ubicación</h1>
          </div>
        </div>
        <div className="seccion-row">
          <div className="map-container" >
            <iframe
              title='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230187.5506380297!2d-100.44318050410371!3d25.648728128501116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629531b437f8f5%3A0xa3d3d3ca6ac89894!2sMonterrey%2C%20Nuevo%20Leon!5e0!3m2!1sen!2smx!4v1679282564566!5m2!1sen!2smx"
              width="100%"
              height="450"
              loading="lazy"
              style={{
                borderRadius: 16,
                border: 0
              }}
              referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>

      <div className='seccion seccion-column contacta'>
        <div className='seccion-row title'>
          <div className="parrafo" >
            <h1>Contáctanos</h1>
          </div>
        </div>
        <div className="seccion-row">
          <div className="parrafo" >
            <p>
              ¿Tienes alguna duda o comentario? Compártenos tu datos y con mucho gusto te atenderemos.
            </p>
          </div>
        </div>

        <div className="seccion-row form">
          <h2>¿Cómo te podemos ayudar?</h2>
          <Button
            type="primary"
            href='mailto:ventas@robgam.com.mx'
            size='large' >
            Haz click para enviarnos un email
          </Button>
          {/* <Input placeholder="Email" />
          <Input placeholder="Subject" />
          <TextArea rows={4} placeholder="¿Cómo podemos ayudarte?" /> */}
        </div>
      </div>

    </HomeStyled>
  )
}
