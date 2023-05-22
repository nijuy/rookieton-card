import { forwardRef } from 'react';

const RadioSelector = forwardRef((props, ref) => {
  const { optionA, optionB } = props;

  const handleInputChange = (e) => {
    ref.current = e.target;
  };

  return (
    <>
      <div>
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
        <label htmlFor={props.optionB}>{props.optionB} </label>
      </div>
    </>
  );
});

export default RadioSelector;
