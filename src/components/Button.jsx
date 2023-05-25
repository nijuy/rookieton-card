import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import start_arrow from '../assets/start_arrow.svg';

const Button = (props) => {
  const { text, showImg, color, link, onSubmit } = props;
  const navigate = useNavigate();

  const onClick = () => {
    const navigateFlag = onSubmit ? onSubmit() : true; //EditCard는 onSubmit()에서 조건 충족해야 페이지 이동
    if (navigateFlag) navigate(link);
  };

  return (
    <>
      <ButtonContainer color={color} onClick={onClick}>
        {text}
        {showImg && <img src={start_arrow} alt="" />}
      </ButtonContainer>
    </>
  );
};

Button.defaultProps = {
  showImg: false,
  link: '',
  onSubmit: undefined,
};

const ButtonContainer = styled.button`
  width: 224px;
  height: 40px;
  background: ${(props) => props.color};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  padding: 0px 25px;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;

export default Button;
