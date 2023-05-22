import { forwardRef, useRef } from 'react';
import styled from 'styled-components';

const EditInput = forwardRef((props, ref) => {
  const { target, maxLength, prevInput } = props;

  const warningRef = useRef();

  const guideText = `${maxLength}자 이하의 정보를 입력해주세요.`;

  const onChange = (e) => {
    const input = e.target.value;

    if (input.length) {
      ref.current.style.border = '1px solid black';
    }
  };

  return (
    <>
      <InputBox>
        {target}
        <Input
          ref={ref}
          onChange={onChange}
          placeholder={`${target} 입력칸`}
          minLength={1}
          maxLength={maxLength}
          defaultValue={prevInput}
        />
        <p ref={warningRef}> {guideText} </p>
      </InputBox>
    </>
  );
});

EditInput.defaultProps = {
  maxLength: 10,
  prevInput: '',
};

export default EditInput;

const InputBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid;
  border-radius: 25px;
  padding: 5px 10px;
`;
