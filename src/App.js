import 'antd/dist/reset.css';
import './App.css';
import Main from './app/index.jsx';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#e5352b',
          colorBgContainer: '#ffffff',
          colorLink: '#000',
          colorLinkHover: '#e5352b',
          borderRadius: '2px',
        },
      }}
    >
      <div className="App">
        <Main />
      </div>
    </ConfigProvider>
  );
}

export default App;
