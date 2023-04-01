import styled from "styled-components";
import imgSomos from "../../assets/images/img-header.png";

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
    justify-content: space-between;
    padding-inline: 80px;
    padding-block: 40px;

    &.somos {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: url(${imgSomos});
      height: calc(100vh - 102px);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      .home-text {
        color: #fff;
        font-size: 55px;
        opacity: 1;
        max-width: 550px;
        text-align: start;
      }
    }

    &.sobre {
      .up-side {
        width: 100%;
        background: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .sobre-side {
          width: 45%;

          img {
            max-width: 100%;
          }

          &.texto {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            height: 100%;
          }

          .parrafo {
            text-align: start;

            h1 {
              font-size: 48px;
            }

            p {
              line-height: 25.9px;
              color: #6e6e86;
            }

            .img-container {
              background: #e5352b;
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
    }

    &.frase {
      background: #000;
      .down-side {
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;

        h1 {
          font-size: 48px;
        }

        .cita {
          width: 100%;
          font-size: 18px;
        }
      }
    }

    &.productos {
      background-color: ${(props) =>
        props.colorPrimary ? props.colorPrimary : "white"};
      color: white;

      .products-side {
        width: 50%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;

        h1 {
          font-size: 48px;
        }

        .producto {
          min-width: 300px;
          min-height: 50px;
          border: 2px solid rgb(255, 255, 255);
          border-radius: 10px 40px 40px 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          padding: 5px;
        }

        .producto-desc {
          margin-left: 10px;

          h2 {
            margin: 0px;
          }
        }
      }

      .image-side {
        width: 50%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    &.conoce {
      .side {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        &.text {
          width: 40%;
          div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            h1 {
              text-align: left;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .seccion {
      flex-direction: column;
      padding-inline: 20px;


      &.somos {
        justify-content: center;

        .home-text {
          font-size: 40px;  
        }
      }

      &.sobre {
        .up-side {
          flex-direction: column-reverse;

          .sobre-side {
            width: 100%;

            .robgam {
              height: 270px;
            }
          }
        }
      }

      &.productos {
        .products-side {
          width: 100%;
          height: 578px;
          min-height: 578px;
        }

        .image-side {
          width: 100%;
          /* max-height: 250px; */
        }
      }

      &.conoce {
        flex-direction: column-reverse;

        .side {
          width: 100%;
          padding-bottom: 15px;

          &.text {
            width: 100%;

            div {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

              h1 {
                text-align: center;
              }
            }
          }
        }

        img {
          max-width: 300px;
        }
      }
    }
  }
`;

export default Home;
