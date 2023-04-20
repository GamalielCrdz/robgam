import styled from "styled-components";
import imgSomos from "../../assets/images/img-header.png";
import imgHeader from "../../assets/images/img-productos-header.png";
import imgProductosPallets from "../../assets/images/img-productos-pallets.png";

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

    .header-title {
      h1 {
        font-family: Montserrat;
        font-size: 48px;
        font-weight: 700;
        line-height: 58px;
        letter-spacing: 0em;
        text-align: center;
        color: #fff;
        margin: 0px;
      }
      p {
        margin: 0px;
      }
    }

    .inner {
      width: 100%;
      max-width: 1280px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &.reverse {
        justify-content: flex-end;
      }

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
          background-position: left top;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }

    &.header-robgam {
      height: auto;
      min-height: 370px;
      background: ${(props) =>
        props.colorPrimary ? props.colorPrimary : "white"};

      .image-backgorund {
        background: url(${imgHeader}) left top / cover no-repeat !important;
      }
    }

    &.productos {
      background-color: #000;
      color: #fff;

      .image-backgorund {
        background: url(${imgProductosPallets}) left top / cover no-repeat !important;
      }

      .parrafo {
        margin-top: 30px;

        .img-icon {
          margin-bottom: 15px;
        }
      }
    }

    &.elegir {
      .inner {
        align-items: flex-start;
      }

      .parrafo {
        width: 100%;

        .img-icon {
          margin-bottom: 15px;
          background-color: white;
        }
      }

      .imagen {
        align-items: flex-end;
        img {
          width: 80%;
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

            &.header {
              height: 180px;
              background: url(${imgHeader}) left top / cover no-repeat,
                linear-gradient(
                  to right,
                  white 20%,
                  white 20%,
                  white 80%,
                  white 0
                ) !important;
              width: 100vw;
              margin-left: -20px;
              margin-right: -20px;
            }
          }
        }
      }

      &.header-robgam {
        padding-top: 10px;
        padding-bottom: 0px;
        min-height: auto;

        .inner {
          flex-direction: column;

          .header-title {
            margin-bottom: 10px;
          }
        }
      }

      &.productos {
        .inner {
          flex-direction: column;

          .parrafo {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }

      &.elegir {
        .inner {
          flex-direction: column;

          .parrafo {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .imagen {
            align-items: center;
          }
        }
      }
    }
  }
`;

export default Home;
