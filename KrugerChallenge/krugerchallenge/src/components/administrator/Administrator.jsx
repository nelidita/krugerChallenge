import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Container,
  ContainerO,
  ItemO,
  SeparatorO,
  ImgLogo,
  Item,
  ItemsContainer,
  ItemText,
  NavbarContainer
} from './Administrator.styles';
import { logoKruger } from '../../assets/images';

const Administrator = () => {
  const items = [
    { id: 'administrador', label: 'Administrador', element: 'administrador' },
    { id: 'empleado', label: 'Empleado', element: 'empleado' },
  ];

  let navigate = useNavigate();

  const goTo = (element) => () =>{
    navigate(`/${element}`);
  };

  const goToUrl = (url) => () =>  navigate(`/administrador/${url}`);

  return (
    <>
      <NavbarContainer>
        <ImgLogo alt="logoKruger" src={logoKruger}/>
        <ItemsContainer>
        {items.map((item) => (
            <Item
              key={item.id}
              onClick={goTo(item.element)}
            >
              <ItemText>{item.label}</ItemText>
            </Item>
        ))}
        </ItemsContainer>
      </NavbarContainer>
      <Container>
        <ContainerO>
          <ItemO onClick={goToUrl('registroempleado')}>
            Registrar Empleado
          </ItemO>
          <SeparatorO />
          <ItemO onClick={goToUrl("listaempleados")}>
            Lista de Empleados
          </ItemO>
        </ContainerO>
        <Outlet />
      </Container>
    </>
  );
};

export default Administrator;