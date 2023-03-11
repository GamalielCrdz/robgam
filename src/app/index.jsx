import { Breadcrumb, Layout, Menu, theme } from "antd";
import Navbar from './Components/navbar/Navbar';
import Home from './Views/Home/Home';

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Layout className="layout" >
      <Header
        style={{
          height: 'auto',
          background: colorBgContainer,
        }} >
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
  );
};
export default App;
