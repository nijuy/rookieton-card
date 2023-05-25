import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MyCard = () => {
  const [card, setCard] = useState({});
  const [isCardEmpty, setIsCardEmpty] = useState(true);

  useEffect(() => {
    const savedCard = localStorage.getItem('card');
    if (savedCard) {
      setCard(JSON.parse(savedCard));
      setIsCardEmpty(false);
    }
  }, []);

  return (
    <>
      {isCardEmpty ? (
        <>
          <div> 매번 똑같은 자기소개에 질렸다면? </div>
          <Button to="/edit">나를 친구에게 소개하기</Button>
        </>
      ) : (
        <>
          <Card>
            {Object.keys(card).map((key) => (
              <p key={key}>
                {card[key]}
                {key === 'number' && '학번'}
              </p>
            ))}
          </Card>
          <Button to="/edit">수정하기</Button>
        </>
      )}
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

const Card = styled.div`
  border: 1px solid;
`;
