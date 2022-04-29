import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  top: 0;
  left: 0;
  align-items: center;
  background-color: #25e320;
  display: flex;
  height: 70px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  color: #ffffff;
`;

export const ImgLogo = styled.img`
  height: 95%;
`;

export const ItemsContainer = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-right: 9px;
  height: 100%;
`;

export const Item = styled.div`
  color: ${({ active }) => (active ? '#EE5007' : '#ffffff')};
  height: 100%;
  margin: 0 5px;
  display: flex;
  min-width: 90px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  :hover {
    color: #EE5007;
  }
`;

export const ItemText = styled.span`
  height: 18px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: normal;
`;