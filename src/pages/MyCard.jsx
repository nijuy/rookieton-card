import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import start_ppussung from '../assets/start_ppussung.svg';
import yourssu_belt from '../assets/yourssu_belt.svg';
import ContentContainer from '../components/ContentContainer';
import MbtiPpussung from '../components/MbtiPpussung';
import bottle from '../assets/bottle.svg';
import logo from '../assets/logo.svg';
import horizontal_button from '../assets/horizontal_button.png';
import vertical_button from '../assets/vertical_button.png';

const MyCard = () => {
  const [card, setCard] = useState({});
  const [isCardEmpty, setIsCardEmpty] = useState(true);
  const [isVerticalMode, setIsVerticalMode] = useState(true);

  const calculateBottleCount = () => {
    let drink = card['Drink'];
    const bottleArr = [];

    while (drink) {
      if (drink > 1) {
        bottleArr.push(100);
        drink--;
      } else {
        bottleArr.push(drink * 100);
        drink = 0;
      }
    }

    return (
      <BottleBox>
        {bottleArr.map((b, ind) => (
          <Bottle key={ind} fill={b}>
            <img src={bottle} alt="" />
          </Bottle>
        ))}
      </BottleBox>
    );
  };

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
      <ContentContainer>
        {isCardEmpty ? (
          <>
            <h4>
              매번 똑같은 자기소개에 질렸다면?
              <br />
              자기소개를 fun, cool, foxy하게
            </h4>
            <img src={logo} alt="" width="240px" />
            <img src={start_ppussung} alt="" width="350px" />

            <Button
              text="나를 친구에게 소개하기"
              showImg={true}
              color="#ab9fed"
              link="/edit"
            ></Button>
          </>
        ) : (
          <>
            <div style={{ border: '1.5px solid #a3a3a3', borderRadius: '10px', padding: '10px' }}>
              <CardContainer isverticalmode={isVerticalMode.toString()}>
                <MbtiPpussung mbti={card['MBTI']} />
                <Belt background={yourssu_belt} />
                <CardContent>
                  {Object.keys(card).map((key) => (
                    <TextBox key={key}>
                      <Text> {key}&nbsp; </Text>
                      {key === 'Drink'
                        ? `${parseInt(card[key])} 병 ${(card[key] - parseInt(card[key])) * 8} 잔`
                        : card[key]}
                      {key === 'St_ID' && <>학번</>}
                    </TextBox>
                  ))}
                  {calculateBottleCount()}
                  <Text color="#A9E0FF"> Yourssu </Text>
                </CardContent>
              </CardContainer>
            </div>
            <CopyrightText> © 2023 Yourssu All rights reserved </CopyrightText>
            <div align="right" style={{ width: '100%' }}>
              <ImageButton
                onClick={() => {
                  setIsVerticalMode((prev) => !prev);
                }}
              >
                <img src={isVerticalMode ? horizontal_button : vertical_button} />
              </ImageButton>
            </div>
          </>
        )}
      </ContentContainer>
    </>
  );
};

export default MyCard;

const TextBox = styled.div`
  line-height: 3rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 336px;
  height: 622px;
  border: 2px solid #a9e0ff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-top: ${(props) => props.isverticalmode === 'false' && '40px'};

  > img {
    transform: ${(props) => props.isverticalmode === 'false' && 'rotate(90deg)'};
    margin-bottom: ${(props) => props.isverticalmode === 'false' && '30px'};
  }

  ${CardContent} {
    transform: ${(props) => props.isverticalmode === 'false' && 'rotate(90deg)'};
  }

  ${TextBox} {
    line-height: ${(props) => props.isverticalmode === 'false' && '2.4rem'};
  }
`;

const Text = styled.p`
  display: inline;
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => (props.color ? props.color : 'black')};
  font-style: ${(props) => (props.color ? 'italic' : 'normal')};
`;

const Belt = styled.div`
  background-image: url(${(props) => props.background});
  background-repeat: repeat-x;
  width: 100%;
  z-index: -1;
  height: 30px;
`;

const BottleBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Bottle = styled.div`
  width: fit-content;
  height: 80px;
  background: ${(props) =>
    `linear-gradient(0deg, #6EDE79 0 ${props.fill}%, white ${1 - props.fill}% 100%)`};
`;

const ImageButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const CopyrightText = styled.p`
  color: #a3a3a3;
  font-weight: 200;
  font-size: 6px;
`;
