import { styled } from 'styled-components';
import close_button from '../assets/close_button.svg';
import logo from '../assets/logo.svg';
import { serviceIntro, serviceCreator, servicePolicy, serviceCaution } from '../assets/MenuText';

const MenuModal = (props) => {
  const { title, onClickClose } = props;

  const setText = () => {
    if (title === 'intro') return [serviceIntro];
    if (title === 'creator') return [serviceCreator];
    if (title === 'policy') return [servicePolicy];
    if (title === 'warning') return [servicePolicy, serviceCaution];
  };

  const text = setText();

  return (
    <Container onClick={onClickClose}>
      <TextBox
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
        {text.map((textData, ind) => (
          <TextContent key={ind} dangerouslySetInnerHTML={{ __html: textData }}></TextContent>
        ))}
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
  width: 320px;
  height: 409px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

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

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: smaller;

  h2 {
    text-align: center;
    margin-bottom: 0;
  }

  h4 {
    margin-bottom: 0;
    text-align: center;
  }

  h5 {
    margin: 0;
    text-align: center;
  }
`;

export default MenuModal;
