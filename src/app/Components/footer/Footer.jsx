import React from 'react'
import FooterStyled from './Footer.styled'
import { theme } from 'antd'
import { Link } from "react-router-dom";
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
          <p><Link to={`/Productos`}>Nuestros productos</Link></p>
          <p><Link to={`/Servicios`}>Servicios</Link></p>
          <p><Link to={`/Informacion`}>Información adicional</Link></p>
          <p><Link to={`/Contacto`}>Contacto</Link></p>
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
