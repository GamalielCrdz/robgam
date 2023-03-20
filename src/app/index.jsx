import React from "react";
import { Layout, theme } from "antd";
import Navbar from './Components/navbar/Navbar';
import FooterR from './Components/footer/Footer';
import Home from './Views/Home/Home';
import Productos from './Views/Productos/Productos';
import Nuestro from './Views/Nuestro/Nuestro';
import Adicional from './Views/Adicional/Adicional';
import Informacion from './Views/Informacion/Informacion';
import LayoutStyled from './index.styled'

const { Header, Content, Footer } = Layout;

const App = () => {
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <LayoutStyled>
      <Layout className="layout" >
        <Header
          className="header"
          background={colorBgContainer}>
          <Navbar />
        </Header>

        <Content
          style={{
            background: colorBgContainer,
          }} >
          <Informacion />
        </Content>

        <Footer background='#000' >
          <FooterR/>
        </Footer>
      </Layout>
    </LayoutStyled>
  );
};
export default App;
