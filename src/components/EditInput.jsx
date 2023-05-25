import { forwardRef } from 'react';
import styled from 'styled-components';

const EditInput = forwardRef((props, ref) => {
  const { target, maxLength, prevInput } = props;

  const guideText = `${maxLength}자 이하의 정보를 입력해주세요.`;

  const onChange = (e) => {
    const letterRegex = /[^0-9]/;
    const input = e.target.value;

    if (input.length) {
      ref.current.style.border = '1px solid #a3a3a3';
    }

    if (target === '학번' && input.search(letterRegex) > -1) {
      ref.current.style.border = '1px solid red';

      e.target.value = null;
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
  border: 1px solid #a3a3a3;
  border-radius: 8px;
  padding: 5px 10px;
`;
