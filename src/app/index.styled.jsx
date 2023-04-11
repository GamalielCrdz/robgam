import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;

  .header {
    padding-inline: 80px;
    height: auto;
    background-color: ${(props) => props.background ? props.background : "white"};
  }

  .ant-layout-footer {
    background: #000;
    color: #fff;
    padding-inline: 80px;
  }

  .layout {
    max-width: 1366px;
  }

  .whatsapp {
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
    background: #25d366;
    width: 70px !important;
    height: 70px !important;
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
  }

  h1 {
    font-size: 56px;
    font-weight: 700;
    line-height: 67px;
    letter-spacing: 0em;
  }

  @media screen and (max-width: 600px) {
    .header {
      padding-inline: 0px;
    }

    .ant-layout-footer {
      padding-inline: 20px;
    }

    h1 {
      font-size: 32px;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0em;
    }
  }
`;

export default Layout;
