import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import EditInput from '../components/EditInput';

const EditCard = () => {
  const nameRef = useRef();
  const deptRef = useRef();
  const idRef = useRef();

  const navigate = useNavigate();

  const emptyInputFocus = (targetRef) => {
    targetRef.current.style.border = '1px solid red';
    targetRef.current.focus();
  };

  const onSubmit = () => {
    const name = nameRef.current.value;
    const dept = deptRef.current.value;
    const studentID = idRef.current.value;

    if (name && dept && studentID) {
      localStorage.setItem(
        'card',
        JSON.stringify({
          name: name,
          dept: dept,
          studentID: studentID,
          // mbti: 'INTP',
          // alcohol: 1,
        }),
      );

      navigate('/');
    } else {
      if (!name) emptyInputFocus(nameRef);
      if (!dept) emptyInputFocus(deptRef);
      if (!studentID) emptyInputFocus(idRef);
    }
  };

  return (
    <>
      <Container>
        <EditInput target={'이름'} ref={nameRef} />
        <EditInput target={'학과'} ref={deptRef} />
        <EditInput target={'학번'} maxLength={2} ref={idRef} />
        <div> mbti </div>
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
