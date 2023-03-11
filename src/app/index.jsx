import { Layout, theme } from "antd";
import Navbar from './Components/navbar/Navbar';
import Home from './Views/Home/Home';
import LayoutStyled from './index.styled'

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


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
          <Home />
        </Content>

        <Footer>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </LayoutStyled>
  );
};
export default App;
