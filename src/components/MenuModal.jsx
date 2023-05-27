import { styled } from 'styled-components';
import close_button from '../assets/close_button.svg';

const MenuModal = (props) => {
  const { title, onClickClose } = props;
  const text = '세부 메뉴';

  return (
    <Container onClick={onClickClose}>
      <TextBox>
        <ImageButton
          onClick={(e) => {
            e.stopPropagation();
            onClickClose();
          }}
        >
          <img src={close_button} alt="" />
        </ImageButton>
        {title}
        <br />
        {text}
      </TextBox>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  background-color: white;
`;

const ImageButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export default MenuModal;
