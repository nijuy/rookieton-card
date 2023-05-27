import { styled } from 'styled-components';

const ContentContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  height: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default ContentContainer;
