import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EditCard = () => {
  return (
    <>
      Card Edit Page
      <Button to="/">완성하기</Button>
    </>
  );
};

export default EditCard;

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
