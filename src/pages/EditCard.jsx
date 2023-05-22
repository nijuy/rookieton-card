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
        <EditInput target={'이름'} prevInput={prevCard && prevCard.name} ref={nameRef} />
        <EditInput target={'학과'} prevInput={prevCard && prevCard.dept} ref={deptRef} />
        <EditInput target={'학번'} prevInput={prevCard && prevCard.id} maxLength={2} ref={idRef} />
        <div>
          mbti
          <RadioSelector optionA={'E'} optionB={'I'} ref={mbtiRef[0]} />
          <RadioSelector optionA={'N'} optionB={'S'} ref={mbtiRef[1]} />
          <RadioSelector optionA={'F'} optionB={'T'} ref={mbtiRef[2]} />
          <RadioSelector optionA={'P'} optionB={'J'} ref={mbtiRef[3]} />
        </div>
        <div> 주량 </div>

        <ButtonBox>
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            취소
          </Button>
          <Button onClick={onSubmit}> 완성 </Button>
        </ButtonBox>
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

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 500px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  align-items: center;
  justify-content: space-evenly;
`;
