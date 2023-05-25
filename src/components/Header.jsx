import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menu_button from '../assets/menu_button.svg';
import edit_button from '../assets/edit_button.svg';

const Header = () => {
  const navigate = useNavigate();
  const [isShowEditButton, setIsShowEditButton] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/edit' || !localStorage.getItem('card')) {
      setIsShowEditButton(false);
    } else {
      setIsShowEditButton(true);
    }
  }, []);

  return (
    <>
      <ButtonBox>
        <ImageButton>
          <img src={menu_button} alt="" />
        </ImageButton>
        {isShowEditButton && (
          <ImageButton
            onClick={() => {
              navigate('/edit');
            }}
          >
            <img src={edit_button} alt="" />
          </ImageButton>
        )}
      </ButtonBox>
    </>
  );
};

export default Header;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 31px;
`;

const ImageButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
