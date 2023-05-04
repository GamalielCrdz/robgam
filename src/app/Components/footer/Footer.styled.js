import styled from "styled-components";

const Footer = styled.div`
  width: 100%;
  max-width: 1280px;

  .footer-container {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #3a3a3a;
  }

  .footer-credits {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
  }

  a {
    color: #fff;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .menu-title {
      font-weight: 500;
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 5px;
    }
  }

  .contacto {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    .footer-container {
      flex-direction: column-reverse;
      align-items: flex-start;
    }

    .footer-credits {
      display: flex;
      justify-content: center;
    }

    .item {
      margin: 5px 0px 7px 0px;
    }
  }
`;

export default Footer;
