import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { BsFillSunFill, BsMoonStars } from 'react-icons/bs';

import { modeStore } from '../../globalStore/globalStore';

const URLS = [
  {
    name: 'HOME',
    url: '/',
  },
  {
    name: 'Card-app',
    url: '/Cards',
  },
  {
    name: 'Calculator',
    url: '/Calculator',
  },
];

export default function Nav() {
  const { selectedMode, setSelectedMode } = modeStore();

  const handleMode = (): void => {
    setSelectedMode(!selectedMode);
    sessionStorage.setItem('ColorMode', String(!selectedMode));
  };

  return (
    <>
      <NavAbs>
        <img src="https://picsum.photos/200/50" alt="dum" />
      </NavAbs>
      <NavSticky>
        <NavLogo>로고</NavLogo>
        <NavLinkBtns>
          <ChangeColorMode onClick={handleMode}>
            {selectedMode ? <ColorIconLight /> : <ColorIconMoon />}
          </ChangeColorMode>
          {URLS.map(item => (
            <LinkBtn key={item.name} to={item.url}>
              {item.name}
            </LinkBtn>
          ))}
        </NavLinkBtns>
      </NavSticky>
    </>
  );
}

const NavAbs = styled.div`
  position: relative;
  background-color: #fff;
  text-align: center;
`;

const NavSticky = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const NavLogo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavLinkBtns = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ChangeColorMode = styled.div`
  cursor: pointer;
  margin-right: 20px;
  transition: all ease 1s;
`;

const RotateScale = css`
  transition: all ease 1s;
  animation: rotate-and-scale-up 0.5s ease;
  @keyframes rotate-and-scale-up {
    from {
      transform: rotate(0deg) scale(0);
    }
    to {
      transform: rotate(360deg) scale(1);
    }
  }
`;

const ColorIconLight = styled(BsFillSunFill)`
  ${RotateScale}
`;

const ColorIconMoon = styled(BsMoonStars)`
  ${RotateScale}
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: black;
`;
