import styled from "styled-components";

const Navbar = styled.div`
  overflow: hidden;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  width: 100%;

  .navbar-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
  }

  .logo {
    width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .navigation {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navigation > .ant-btn-link {
    font-size: 16px;
    font-weight: 600;
  }
  
  .icon {
    display: none;
  }

  .btn-call {
    display: none;
  }
  
  @media screen and (max-width: 600px) {
    padding: 20px;

    .logo {
      img {
        width: 100%;
      }
    }
    .navigation {
      justify-content: flex-end;
    }
    button:not(:first-child) {
      display: none;
    }
    button.icon {
      display: block;
      border: none;
    }
  }
  
  @media screen and (max-width: 600px) {
    
    .responsive {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      background-color: white;
      flex-direction: column;
      align-items: flex-start;  
      justify-content: flex-start;
      padding: 14px 0px 0px 25px;

      .navigation {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        justify-content: center;

        .btn-contacto {
         width: 120px;
        }
        
        .btn-call {
          display: block;
          background-color: #000;
          color: #fff;
          width: 120px;
        }
      }
      
      .navigation > button {
        display: block;
        margin: 10px 0px;
        padding-left: 0px;
      }

      button.icon {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
  }
`;

export default Navbar;