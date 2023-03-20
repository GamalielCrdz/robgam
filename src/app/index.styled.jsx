import styled from "styled-components";

const Layout = styled.div`
  .header { 
    height: auto;
    background-color: ${props => props.background ? props.background : "white"};
  }

  .ant-layout-footer {
    background: #000;
    color: #fff;
  }

  @media screen and (max-width: 600px) {
    .header {
      padding-inline: 0px;
    }
  }
`;

export default Layout;