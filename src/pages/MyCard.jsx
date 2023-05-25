import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Button from '../components/Button';

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
          <Button
            text="나를 친구에게 소개하기"
            showImg={true}
            color="#ab9fed"
            link="/edit"
          ></Button>
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
          <div>수정하기</div>
        </>
      )}
    </>
  );
};

export default MyCard;

const Card = styled.div`
  border: 1px solid;
`;
