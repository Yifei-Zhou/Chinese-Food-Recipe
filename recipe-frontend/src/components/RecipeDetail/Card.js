import styled from "styled-components";

const Card = ({recipe, index}) => {
  return (
    <CardWrapper>
      <div className="image-container">
        <img src={recipe.image[index]} alt="No Image" />
      </div>

      <div className="content">
        <div className="heading">
          <h3 className="step">
              <span className="next-line">Step {index}</span>
          </h3>
        </div>

        <div className="details">
          <p className="details__text">
            {recipe.instructions[index - 1]}
          </p>
        </div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  border-radius: 8px;
  background: #f5f5f6;

  .image-container {
    height: 300px;
    border-radius: 0 0 0 0;
    overflow: scale-down;

    @media (min-width: 832px) {
      height: 300px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .content {
    padding: 24px 16px 31px;

    .heading {
      .heading__title {
        font-weight: 400;
        font-size: 28px;
        padding-bottom: 10px;
        line-height: 34px;
      }

      .heading__subtitle {
        font-weight: 600;
        font-size: 25px;
        color: #4b4c53;
        padding-bottom: 19px;
      }
    }

    .details {
      .details__text {
        font-weight: 200;
        line-height: 26px;
        color: #4b4c53;
        font-size: 20px;
        padding-bottom: 31px;
        word-spacing: 1px;
      }

      .details__btn {
        border: none;
        background: none;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        word-spacing: -4px;
        color: #6267a1;
      }
    }

    .next-line {
      display: inline-block;
    }
  }
`;

export default Card;
