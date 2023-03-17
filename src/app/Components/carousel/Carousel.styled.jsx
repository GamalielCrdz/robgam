import styled from "styled-components";

const Carousel = styled.div`
  width: 100%;

  .item-container {
    display: flex !important;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 45px 0px;

    .item {
      width: 360px;
      height: 220px;
      padding: 20px;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      justify-content: space-evenly;

      .item-footer {
        border-top: 1px solid #000;
      }
    }
  }

  .ant-carousel {
    .slick-dots {
      li {
        &.slick-active {
          button {
            background: #000;
          }
        }
        button {
          background: #fff;
          width: 7px;
          height: 7px;
          border-radius: 20px;
          opacity: 1;
        }
      }
    }
  }
`;

export default Carousel;
