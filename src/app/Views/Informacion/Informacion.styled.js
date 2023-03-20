import styled from "styled-components";

const Home = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .seccion {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    // height: 100vh;

    &.nuestro {
      height: auto;
    }

    &.seccion-column {
      flex-direction: column !important;
      align-items: center;
      justify-content: flex-start;

      
    }

    .seccion-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      &.contact-cards {
        justify-content: center;

        .ant-card {
          box-shadow: none;
        }
      }

      &.form {
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        height: 350px;

        input, textarea  {
          width: 600px;
        }
      }

      .map-container {
        width: 100%;
        padding: 10px;
        border-radius: 16px;
      }

      &.title {
      }
    }

    .img-header {
      background: ${(props) =>
        props.colorPrimary ? props.colorPrimary : "white"};
      color: white;
      justify-content: space-between;

      &.productos {
        background: #000;
      }

      &.elegir {
        background: #fff;
        padding: 50px 0px;

        .sobre-side {
          background: #fff;
        }

        .parrafo {
          h1 {
            color: #000000;
            font-size: 48px;
            font-size: 48px;
            font-weight: 600;
            line-height: 58px;
            letter-spacing: 0em;
            text-align: left;
          }

          p {
            color: #6e6e86;
          }
          .img-container {
            background: ${(props) =>
              props.colorPrimary ? props.colorPrimary : "white"};
          }
        }

        .image-container {
          justify-content: center;
          img {
            width: 450px;
          }
        }
      }

      &.testimonios {
        flex-direction: column;
        background-color: ${(props) =>
          props.colorPrimary ? props.colorPrimary : "white"};

        h1 {
          width: 100%;
        }
        .parrafo-text {
          width: 100%;
        }
      }

      .title {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      .image-container {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        img {
          width: 100%;
        }
      }
    }

    .text {
      width: 40%;
      margin: 80px;

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #5b5b5b;
        text-align: start;
      }
    }

    .sobre-side {
      width: 45%;
      background: #000;
      padding: 0px 20px;

      img {
        max-width: 100%;
      }

      &.texto {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        width: 50%;
      }

      .parrafo {
        text-align: start;
        margin-bottom: 40px;

        h1 {
          font-size: 48px;
        }

        p {
          line-height: 25.9px;
          color: #fff;
        }

        .parrafo-text {
          margin-bottom: 1em;
        }

        .img-container {
          background: #fff;
          display: flex;
          justify-content: center;
          width: 40px;
          height: 40px;
          padding: 2px;
          border-radius: 4px;
          margin: 15px 0px;

          img {
            width: 30px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .seccion {
      flex-direction: column;

      &.seccion-column {
        &.contacta {
          margin-left: 0px;
        }
      }

      .seccion-row {
        width: 100%;
        display: flex;
        flex-direction: column;

        &.form {
          align-items: center;

          input, textarea {
            width: 350px;
          }
        }

        &.title {
          h1 {
            margin-left: 5px;
          }
        }

        &.productos {
          flex-direction: column-reverse;

          .image-container {
            justify-content: center;
            background: rgb(0, 0, 0);

            img {
              width: 90%;
              margin-bottom: 10px;
            }
          }
        }

        &.recolectamos {
          .parrafo {
            width: 100%;
          }

          .pictures-container {
            flex-direction: column;
            .picture {
              padding: 5px 0px;
            }
          }
        }

        > div {
          width: 100% !important;
        }

        .image-container {
          background-color: white;

          .img-vision-pallets {
            width: 300px !important;
          }
        }

        .title {
          p {
            margin: 0px;
          }
        }
      }

      .text {
        margin: 0px;
        padding: 20px;
      }
    }
  }
`;

export default Home;