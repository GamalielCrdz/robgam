import React, { useState } from 'react'
import NavbarStyled from './Navbar.styled'
import { Button, theme } from 'antd'
import { MenuOutlined, PhoneFilled, CloseOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo-robgam.svg';

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
            size='large'
            onClick={onClick}
            className="icon"
            icon={!navbarResponsive ? <MenuOutlined /> : <CloseOutlined />}
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
          <Button type="primary" size='large' className='btn-contacto' >
            Contacto
          </Button>
          <Button icon={<PhoneFilled />} type="default" size='large' className='btn-call' >
            Llamar
          </Button>
        </div>
      </div>
    </NavbarStyled>
  )
}
