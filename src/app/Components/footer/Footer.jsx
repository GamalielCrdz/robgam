import React, { useState } from 'react'
import FooterStyled from './Footer.styled'
import { theme } from 'antd'
import logo from '../../assets/images/logo-robgam-footer.svg';

export default function Navbar() {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <FooterStyled colorPrimary={colorPrimary}>
      <div className="footer-container">
        <div className="item logo">
          <img src={logo} alt="logo-footer" />
        </div>
        <div className="item menu">
          <p className="menu-title">
            Menu:
          </p>
          <p><a href="">Nuestros productos</a></p>
          <p><a href="">Servicios</a></p>
          <p><a href="">Información adicional</a></p>
          <p><a href="">Contacto</a></p>
        </div>
        <div className="item contacto">
          <div className="contacto-email">
            Email:
            <p><a href="mailto: ventas@robgam.com.mx">ventas@robgam.com.mx</a></p>
          </div>

          <div className="contacto-direccion">
            Dirección:
            <p>
              Loma Silvestre 2712 Lomas de San Francisco,
              <br />
              Monterrey, Nuevo León, México.
            </p>
          </div>

        </div>
      </div>
      <div className="footer-credits">
        © 2023 | All rights reserved. | by Leemco.mx
      </div>

    </FooterStyled>
  )
}
