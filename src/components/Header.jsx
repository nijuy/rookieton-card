import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menu_button from '../assets/menu_button.svg';
import edit_button from '../assets/edit_button.svg';
import close_button from '../assets/close_button.svg';

const Header = () => {
  const navigate = useNavigate();
  const [isShowEditButton, setIsShowEditButton] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const reverseOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    if (window.location.pathname === '/edit' || !localStorage.getItem('card')) {
      setIsShowEditButton(false);
    } else {
      setIsShowEditButton(true);
    }
  }, []);

  return (
    <>
      {openMenu && (
        <MenuContainer onClick={reverseOpenMenu}>
          <MenuBox
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ImageButton onClick={reverseOpenMenu}>
              <img src={close_button} alt="" />
            </ImageButton>
            <List>
              <li> 서비스 소개 </li>
              <li> 만든 사람들 </li>
              <li> 이용약관 </li>
            </List>
          </MenuBox>
        </MenuContainer>
      )}

      <ButtonBox>
        <ImageButton onClick={reverseOpenMenu}>
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

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
`;

const MenuBox = styled.div`
  background-color: white;
  height: 100vh;
  width: 230px;
  float: left;

  ${ImageButton} {
    padding: 10px;
    width: fit-content;
    float: right;
  }
`;

const List = styled.ul`
  list-style: none;
  margin-top: 50px;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
