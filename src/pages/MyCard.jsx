import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import start_ppussung from '../assets/start_ppussung.svg';

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
      <Header />
      {isCardEmpty ? (
        <>
          <h4> 매번 똑같은 자기소개에 질렸다면? </h4>
          <img src={start_ppussung} alt="" />

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
                {key === 'alcohol'
                  ? `${parseInt(card[key])}병 ${(card[key] - parseInt(card[key])) * 8}잔`
                  : card[key]}
              </p>
            ))}
          </Card>
        </>
      )}
    </>
  );
};

export default MyCard;

const Card = styled.div`
  border: 1px solid;
`;
