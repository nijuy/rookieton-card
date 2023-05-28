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
          <TextContent
            key={ind}
            title={title}
            dangerouslySetInnerHTML={{ __html: textData }}
          ></TextContent>
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
  max-height: 480px;
  height: fit-content;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-top: 15px solid white;
  border-right: 8px solid white;
  border-bottom: 15px solid white;

  div {
    display: flex;
    justify-content: space-between;
  }

  img {
    margin-left: 33%;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #a3a3a3;
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

  h1,
  h2,
  h3,
  h5,
  p {
    text-align: center;
    margin-bottom: 0;
  }

  h3 {
    color: ${(props) => (props.title === 'intro' ? '#AB9FED' : 'black')};
  }

  h4 {
    margin-bottom: 0;
    text-align: ${(props) => (props.title === 'intro' ? 'center' : 'left')};
    font-size: ${(props) => props.title === 'intro' && 'smaller'};
    font-weight: 500;
  }

  #intro_title {
    color: #ab9fed;
  }

  h5 {
    margin: 20px 0 10px 0;
  }

  span {
    text-align: ${(props) => (props.title === 'intro' ? 'center' : 'left')};
  }

  text {
    color: #fe94c1;
    font-weight: 600;
  }
`;

export default MenuModal;
