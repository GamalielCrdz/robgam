import styled from "styled-components";
import imgSomos from "../../assets/images/img-header.png";
import imgProd from "../../assets/images/img-prod.png";

const Home = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: start;

  .seccion {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-inline: 80px;
    padding-block: 40px;
    position: relative;

    .inner {
      width: 100%;
      max-width: 1280px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .side {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;

        &.image-backgorund {
          position: absolute;
          left: 50%;
          width: 50%;
          top: 0px;
          bottom: 0px;
          background: url(${imgSomos});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }

    &.somos {
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
      }
    }

    &.sobre {
      .image {
        align-items: flex-start;
        .robgam {
          max-width: 80%;
        }
      }

      .texto {
        justify-content: space-between;
        height: 100%;
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
          text-align: center;
        }

        .cita {
          width: 100%;
          font-size: 18px;
        }
      }
    }

    &.productos {
      background-color: ${(props) => props.colorPrimary ? props.colorPrimary : "white"};
      color: white;

      .products-list {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        padding-right: 90px;

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
          margin-bottom: 30px;
        }

        .producto-desc {
          margin-left: 10px;

          h2 {
            margin: 0px;
          }
        }
      }

      .image-backgorund {
        background: url(${imgProd}) center center / cover no-repeat!important;
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

        &.image {
          img {
            width: 100%;
          }
        }

        &.text {
          width: 40%;
          div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            h1 {
              text-align: left;
              color: #000;
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
      text-align: center;

      .inner {
        flex-direction: column-reverse;

        .side {
          width: 100%;

          &.image-backgorund {
            position: relative;
            width: 300px;
            height: 220px;
            left: 0px;
            top: 0px;
            bottom: 0px;
          }
        }
      }

      &.somos {
        justify-content: center;

        .home-text {
          font-size: 40px;
        }
      }

      &.sobre {
        .image {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .parrafo {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }

      &.productos {
        .inner {
          flex-direction: column;
        }

        .products-list {
          width: 100%;
          padding: 0px;
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
