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
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      opacity: 1;
      transform-style: preserve-3d;
      max-width: 550px;
      text-align: start;
      margin: 10px;
      animation-name: fade-text;
      animation-duration: 2s;
    }

    @keyframes fade-text {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }
      50%  {
        opacity: 0.5;
      }
      100% {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  }

`;

export default Home;