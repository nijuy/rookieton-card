import { styled } from 'styled-components';
import { forwardRef } from 'react';

const RadioSelector = forwardRef((props, ref) => {
  const { optionA, optionB, guideText } = props;

  const handleInputChange = (e) => {
    ref.current = e.target;
  };

  return (
    <>
      <Container>
        {`${guideText[0]}형? vs ${guideText[1]}형?`}
        <div style={{ display: 'flex' }}>
          <RadioInputBox direction="L">
            <input
              type="radio"
              ref={ref}
              id={optionA}
              name={optionA + optionB}
              value={optionA}
              onChange={handleInputChange}
              defaultChecked
            />
            <label htmlFor={optionA}>{optionA}</label>
          </RadioInputBox>
          <RadioInputBox direction="R">
            <input
              type="radio"
              id={optionB}
              name={optionA + optionB}
              value={optionB}
              onChange={handleInputChange}
            />
            <label htmlFor={optionB}>{optionB} </label>
          </RadioInputBox>
        </div>
      </Container>
    </>
  );
});

const Container = styled.div`
  margin: 0px 35px 35px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RadioInputBox = styled.div`
  border: 1px solid #a3a3a3;
  border-right: ${(props) => props.direction === 'L' && 'none'};
  border-radius: ${(props) => (props.direction === 'L' ? '8px 0px 0px 8px' : '0px 8px 8px 0px')};
  width: 80px;
  height: 24px;
  display: flex;
  justify-content: center;
`;

export default RadioSelector;
