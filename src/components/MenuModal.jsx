import { styled } from 'styled-components';
import close_button from '../assets/close_button.svg';
import logo from '../assets/logo.svg';

const MenuModal = (props) => {
  const { title, onClickClose } = props;
  const text = '세부 메뉴';

  return (
    <Container onClick={onClickClose}>
      <TextBox>
        <div>
          <div style={{ width: '90%' }}>
            <img src={logo} alt="" width={150} />
          </div>
          <ImageButton
            onClick={(e) => {
              e.stopPropagation();
              onClickClose();
            }}
          >
            <img src={close_button} alt="" />
          </ImageButton>
        </div>
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
  width: 312px;
  height: 409px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
  }

  img {
    margin-left: 33%;
  }
`;

const ImageButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  height: fit-content;
`;

export default MenuModal;
