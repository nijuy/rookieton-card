import { styled } from 'styled-components';

const ContentContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  height: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h4 {
    margin: 0;
  }
`;

export default ContentContainer;
