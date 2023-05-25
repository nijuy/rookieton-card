import { forwardRef } from 'react';

const RadioSelector = forwardRef((props, ref) => {
  const { optionA, optionB, guideText } = props;

  const handleInputChange = (e) => {
    ref.current = e.target;
  };

  return (
    <>
      <div>
        <p> {`${guideText[0]}형? vs ${guideText[1]}형?`} </p>
        <input
          type="radio"
          ref={ref}
          id={optionA}
          name={optionA + optionB}
          value={optionA}
          onChange={handleInputChange}
          defaultChecked
        />
        <label htmlFor={optionA}> {optionA} </label>
        <input
          type="radio"
          id={optionB}
          name={optionA + optionB}
          value={optionB}
          onChange={handleInputChange}
        />
        <label htmlFor={optionB}>{optionB} </label>
      </div>
    </>
  );
});

export default RadioSelector;
