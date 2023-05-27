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
          <RadioInput
            type="radio"
            ref={ref}
            id={optionA}
            name={optionA + optionB}
            value={optionA}
            direction="L"
            onChange={handleInputChange}
            defaultChecked
          />
          <RadioInputLabel direction="L" htmlFor={optionA}>
            {optionA}
          </RadioInputLabel>
          <RadioInput
            type="radio"
            id={optionB}
            name={optionA + optionB}
            value={optionB}
            direction="R"
            onChange={handleInputChange}
          />
          <RadioInputLabel direction="R" htmlFor={optionB}>
            {optionB}
          </RadioInputLabel>
        </div>
      </Container>
    </>
  );
});

const Container = styled.div`
  margin: 0px 15px 15px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
`;

const RadioInputLabel = styled.label`
  border: 1px solid #a3a3a3;
  border-right: ${(props) => props.direction === 'L' && 'none'};
  border-radius: ${(props) => (props.direction === 'L' ? '8px 0px 0px 8px' : '0px 8px 8px 0px')};
  width: 60px;
  height: 24px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  &:checked + ${RadioInputLabel} {
    background-color: ${(props) => (props.direction === 'L' ? '#AB9FED' : '#FE94C1')};
    color: white;
  }
  display: block;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: -1;
`;

export default RadioSelector;
