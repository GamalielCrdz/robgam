import React, { useState } from 'react'
import NavbarStyled from './Navbar.styled'
import { Button, theme } from 'antd'
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo-robgam.svg' // relative path to image 

export default function Navbar() {
  const [navbarResponsive, setNavbarResponsive] = useState(false);
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const onClick = () => {
    setNavbarResponsive(!navbarResponsive)
  }

  return (
    <NavbarStyled colorPrimary={colorPrimary} className="topnav">
      <div className={`navbar-container ${navbarResponsive ? 'responsive' : ''}`}>
        <div className="logo">
          <img src={logo} alt="logo-navbar" />
        </div>

        <div className="navigation">
          <Button
            onClick={onClick}
            className="icon"
            type="primary"
            icon={<MenuOutlined />}
          />
          <Button type="link">
            Inicio
          </Button>
          <Button type="link">
            Nuestros Productos
          </Button>
          <Button type="link">
            Nuestros Servicios
          </Button>
          <Button type="link">
            Información Adicional
          </Button>
          <Button type="primary">
            Contacto
          </Button>
        </div>
      </div>
    </NavbarStyled>
  )
}
