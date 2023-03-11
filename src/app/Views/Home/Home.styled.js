import styled from "styled-components";

const Home = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .somos {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .home-text {
      font-size: 55px;
      opacity: 1;
      max-width: 550px;
      text-align: start;
      margin: 10px;
      animation-name: fade-text;
      animation-duration: 2s;
    }
  }

`;

export default Home;