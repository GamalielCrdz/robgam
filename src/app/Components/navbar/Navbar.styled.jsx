import styled from "styled-components";

const Navbar = styled.div`
  overflow: hidden;
  padding: 10px 0px;
  /* background-color: #333; */
  .navbar-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
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
  
  @media screen and (max-width: 600px) {
    .navigation {
      justify-content: flex-end;
    }
    button:not(:first-child) {
      display: none;
    }
    button.icon {
      float: left;
      display: block;
    }
  }
  
  @media screen and (max-width: 600px) {
    .responsive {
      flex-direction: column;
      background-color: ${props => props.colorPrimary ? props.colorPrimary : "white"};
      color: white;
    }
    .responsive > .navigation {
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      justify-content: center;
    }
    .responsive > .navigation > button {
      display: block;
      color: white;
    }
    button.icon {
      position: absolute;
      top: 16px;
      right: 15px;
    }
  }
`;

export default Navbar;