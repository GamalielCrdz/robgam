import React, { useState } from 'react'
import NavbarStyled from './Navbar.styled'
import { Button, theme } from 'antd'
import { MenuOutlined, PhoneFilled, CloseOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
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
          <Link to='/'>
            <img src={logo} alt="logo-navbar" />
          </Link>
        </div>

        <div className="navigation">
          <Button
            size='large'
            onClick={onClick}
            className="icon"
            icon={!navbarResponsive ? <MenuOutlined /> : <CloseOutlined />}
          />
          <Button onClick={onClick} type="link">
            <Link to='/'>Inicio</Link>
          </Button>
          <Button onClick={onClick} type="link">
            <Link to={`/Productos`}>Nuestros Productos</Link>
          </Button>
          <Button onClick={onClick} type="link">
            <Link to={`/Servicios`}>Nuestros Servicios</Link>
          </Button>
          <Button onClick={onClick} type="link">
            <Link to={`/Informacion`}>Información Adicional</Link>
          </Button>
          <Button onClick={onClick} type="primary" size='large' className='btn-contacto' >
            <Link to={`/Contacto`}>Contacto</Link>
          </Button>
          <Button onClick={onClick} icon={<PhoneFilled />} type="link" size='large' className='btn-call' href='tel:81-130-601-68' >
            Llamar
          </Button>
        </div>
      </div>
    </NavbarStyled>
  )
}
