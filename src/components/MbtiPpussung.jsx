import ENFJ from '../assets/ENFJ.svg';
import ENFP from '../assets/ENFP.svg';
import ENTJ from '../assets/ENTJ.svg';
import ENTP from '../assets/ENTP.svg';
import ESFJ from '../assets/ESFJ.svg';
import ESFP from '../assets/ESFP.svg';
import ESTJ from '../assets/ESTJ.svg';
import ESTP from '../assets/ESTP.svg';
import INFJ from '../assets/INFJ.svg';
import INFP from '../assets/INFP.svg';
import INTJ from '../assets/INTJ.svg';
import INTP from '../assets/INTP.svg';
import ISFJ from '../assets/ISFJ.svg';
import ISTJ from '../assets/ISTJ.svg';
import ISFP from '../assets/ISFP.svg';
import ISTP from '../assets/ISTP.svg';
import { styled } from 'styled-components';

const MbtiPpussung = (props) => {
  const mbti = {
    ENFJ: ENFJ,
    ENFP: ENFP,
    ENTJ: ENTJ,
    ENTP: ENTP,
    ESFJ: ESFJ,
    ESFP: ESFP,
    ESTJ: ESTJ,
    ESTP: ESTP,
    INFJ: INFJ,
    INFP: INFP,
    INTJ: INTJ,
    INTP: INTP,
    ISFJ: ISFJ,
    ISTJ: ISTJ,
    ISFP: ISFP,
    ISTP: ISTP,
  };

  return <Img src={mbti[props.mbti]} alt="" />;
};

const Img = styled.img`
  padding-top: 5px;
`;

export default MbtiPpussung;
