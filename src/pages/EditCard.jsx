import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import EditInput from '../components/EditInput';
import RadioSelector from '../components/RadioSelector';

const EditCard = () => {
  const prevCard = JSON.parse(localStorage.getItem('card'));

  const nameRef = useRef();
  const deptRef = useRef();
  const idRef = useRef();
  const mbtiRef = Array.from({ length: 4 }, () => useRef());

  const navigate = useNavigate();

  const emptyInputFocus = (targetRef) => {
    targetRef.current.style.border = '1px solid red';
    targetRef.current.focus();
  };

  const onSubmit = () => {
    const name = nameRef.current.value;
    const dept = deptRef.current.value;
    const id = idRef.current.value;
    const mbti = mbtiRef.map((r) => r.current.value).join('');

    if (name && dept && id) {
      localStorage.setItem(
        'card',
        JSON.stringify({
          name: name,
          dept: dept,
          id: id,
          mbti: mbti,
          // alcohol: 1,
        }),
      );

      navigate('/');
    } else {
      if (!name) emptyInputFocus(nameRef);
      if (!dept) emptyInputFocus(deptRef);
      if (!id) emptyInputFocus(idRef);
    }
  };

  return (
    <>
      <Container>
        <EditInput
          target={'이름'}
          prevInput={prevCard && prevCard.name}
          ref={nameRef}
          placeholder={'이름을 입력해주세요 (10자 내, 특수문자 가능)'}
        />
        <EditInput target={'학과'} prevInput={prevCard && prevCard.dept} ref={deptRef} />
        <EditInput
          target={'학번'}
          prevInput={prevCard && prevCard.id}
          maxLength={2}
          ref={idRef}
          placeholder={'학번 (ex. 20)'}
        />
        <div style={{ display: 'flex' }}>
          MBTI
          <MBTIBox>
            <RadioSelector
              optionA={'E'}
              optionB={'I'}
              ref={mbtiRef[0]}
              guideText={['외향', '내향']}
            />
            <RadioSelector
              optionA={'S'}
              optionB={'N'}
              ref={mbtiRef[1]}
              guideText={['감각', '직관']}
            />
            <RadioSelector
              optionA={'T'}
              optionB={'F'}
              ref={mbtiRef[2]}
              guideText={['사고', '감각']}
            />
            <RadioSelector
              optionA={'J'}
              optionB={'P'}
              ref={mbtiRef[3]}
              guideText={['판단', '인식']}
            />
          </MBTIBox>
        </div>
        <div> 주량 </div>

        <Button onClick={onSubmit}> 완성 </Button>
      </Container>
    </>
  );
};

export default EditCard;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color: white;
  border: 5px solid purple;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  align-items: center;
  justify-content: space-evenly;
`;

const MBTIBox = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;
