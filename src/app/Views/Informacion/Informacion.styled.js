import styled from "styled-components";
import imgHeader from "../../assets/images/img-contacto-header.png";

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
        .image-backgorund {
          position: absolute;
          left: 0% !important;
          width: 50%;
          top: 0px;
          bottom: 0px;
        }
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
          background: url(${imgHeader});
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

    &.info-contacto {
      .contact-cards {
        .ant-card {
          box-shadow: none;
          width: 30%;
        }
      }
    }

    &.mapa {
      .side {
        width: 100%;
        align-items: flex-start;

        .map-container {
          width: 100%;
        }
      }
    }

    &.contactanos {
      .inner {
        flex-direction: column;
        align-items: flex-start;
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

      &.info-contacto {
        .contact-cards {
          .ant-card {
            box-shadow: none;
            width: 100%;
            margin: 0px;
          }
        }
      }
    }
  }
`;

export default Home;
