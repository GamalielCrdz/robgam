import styled from "styled-components";

const Navbar = styled.div`
  overflow: hidden;
  padding: 10px 0px;

  .navbar-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .navigation {
    width: 70%;
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
    padding: 10px 10px;

    .logo {
      margin: 16px;
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

      .navigation {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        justify-content: center;

        .btn-contacto {
         margin-left: 16px;
         width: 120px;
        }
        
        .btn-call {
          margin-left: 16px;
          background-color: #000;
          color: #fff;
          width: 120px;
        }
      }
      
      .navigation > button {
        display: block;
        margin: 10px 0px;
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