import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyCard = () => {
  return (
    <>
      Card Display Page
      <Button to="/edit">수정하기</Button>
    </>
  );
};

export default MyCard;

const Button = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  padding: 10px 20px;
  font-size: 20px;
  background-color: white;
  border: 5px solid purple;
  border-radius: 5px;
`;
