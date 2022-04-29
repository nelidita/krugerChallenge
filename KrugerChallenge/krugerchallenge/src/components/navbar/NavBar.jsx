import React from 'react';
import { ImgLogo, Item, ItemsContainer, ItemText, NavbarContainer } from './NavBar.style';
import { logoKruger } from '../../assets/images';

const Navbar = () => {
  const items = [
    { id: 'projects', label: 'Administrador', to: '/administrador' },
    { id: 'products', label: 'Empleado', to: '/empleado' },
  ];

  return (
    <NavbarContainer>
      <ImgLogo alt="logoKruger" src={logoKruger}/>
      <ItemsContainer>
      {items.map((item) => (
          <Item
            key={item.id}
            // active={item.id === currentLocation}
            // onClick={goTo(item.to)}
          >
            <ItemText>{item.label}</ItemText>
          </Item>
      ))}
      </ItemsContainer>
    </NavbarContainer>
  );
};

export default Navbar;