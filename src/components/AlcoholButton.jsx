import { forwardRef, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import bottle from '../assets/bottle.svg';

const AlcoholButton = forwardRef((props, ref) => {
  const { prevInput } = props;

  const [fillBottle, setFillBottle] = useState(prevInput ? Number(prevInput * 100) : 0);

  const ONE_BOTTLE = 100;
  const ONE_SHOT = 12.5;

  useEffect(() => {
    ref.current.value = fillBottle;
  }, [fillBottle]);

  const onClickPlus = (plus) => {
    setFillBottle((prev) => prev + plus);
  };

  const onClickMinus = (minus) => {
    setFillBottle((prev) => prev - minus);
  };

  const calculateFillBottle = (degree) => {
    if (fillBottle < degree) {
      if (fillBottle > degree - 100) {
        return fillBottle - (degree - 100);
      } else {
        return 0;
      }
    } else {
      return 100;
    }
  };

  return (
    <div>
      <ButtonContainer>
        <ButtonBox>
          <Button
            onClick={() => {
              onClickMinus(ONE_BOTTLE);
            }}
            direction="L"
            disabled={fillBottle < 100 && true}
          >
            -
          </Button>
          {parseInt(fillBottle / 100)}
          <Button
            onClick={() => {
              onClickPlus(ONE_BOTTLE);
            }}
            direction="R"
            disabled={fillBottle > 400 && true}
          >
            +
          </Button>
        </ButtonBox>
        병
        <ButtonBox>
          <Button
            onClick={() => {
              onClickMinus(ONE_SHOT);
            }}
            direction="L"
            disabled={fillBottle === 0 && true}
          >
            -
          </Button>
          {(fillBottle % 100) / 12.5}
          <Button
            onClick={() => {
              onClickPlus(ONE_SHOT);
            }}
            direction="R"
            disabled={fillBottle === 500 && true}
          >
            +
          </Button>
        </ButtonBox>
        잔
      </ButtonContainer>

      <BottleBox>
        <Bottle fill={calculateFillBottle(100)}>
          <img src={bottle} alt="" />
        </Bottle>
        <Bottle fill={calculateFillBottle(200)}>
          <img src={bottle} alt="" />
        </Bottle>
        <Bottle fill={calculateFillBottle(300)}>
          <img src={bottle} alt="" />
        </Bottle>
        <Bottle fill={calculateFillBottle(400)}>
          <img src={bottle} alt="" />
        </Bottle>
        <Bottle fill={calculateFillBottle(500)}>
          <img src={bottle} alt="" />
        </Bottle>
      </BottleBox>
      <Text ref={ref}> 병은 최대 5병, 잔은 최대 8잔 </Text>
    </div>
  );
});

const Bottle = styled.div`
  width: fit-content;
  background: ${(props) =>
    `linear-gradient(0deg, #6EDE79 0 ${props.fill}%, white ${1 - props.fill}% 100%)`};
  height: 80px;
`;

const BottleBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #a3a3a3;
  width: 25px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;

  font-weight: 500;
`;

const ButtonBox = styled.div`
  border: 1px solid #a3a3a3;
  border-radius: 7px;
`;

const Text = styled.p`
  color: #a3a3a3;
  font-weight: 500;
  font-size: 6px;
  text-align: end;
`;

export default AlcoholButton;
