import React from "react";
import { Layout, theme, Button } from "antd";
import Navbar from './Components/navbar/Navbar';
import FooterR from './Components/footer/Footer';
import Home from './Views/Home/Home';
import Productos from './Views/Productos/Productos';
import Servicio from './Views/Servicios/Servicio';
import Adicional from './Views/Adicional/Adicional';
import Informacion from './Views/Informacion/Informacion';
import LayoutStyled from './index.styled'
import { Route, Routes } from "react-router-dom";
import whatsapp from './assets/icons/whatsapp.png';

const { Header, Content, Footer } = Layout;

const App = () => {
  const { token: { colorBgContainer } } = theme.useToken();
  const router = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "Productos",
      element: <Productos />,
    },
    {
      path: "Servicios",
      element: <Servicio />,
    },
    {
      path: "Informacion",
      element: <Adicional />,
    },
    {
      path: "Contacto",
      element: <Informacion />,
    },
  ];

  return (
    <LayoutStyled>
      <Layout className="layout" >
        <Header
          className="header"
          background={colorBgContainer}>
          <Navbar />
        </Header>

        <Content style={{ background: colorBgContainer, position: 'relative' }} >
          <Routes>
            {
              router.map(ruta => (
                <Route path={ruta.path} element={ruta.element} key={`${ruta.path}`} />
              ))
            }
          </Routes>
          <Button
            className="whatsapp"
            size="large"
            shape="circle"
            alt="whatsapp"
            href="https://api.whatsapp.com/send?phone=528113060168"
            icon={<img src={whatsapp} alt="whatsapp" width={50} />}
          />
        </Content>

        <Footer background='#000' >
          <FooterR />
        </Footer>
      </Layout>
    </LayoutStyled>
  );
};
export default App;
