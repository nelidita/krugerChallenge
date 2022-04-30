import React from 'react';
import { useNavigate } from 'react-router-dom';
import CompleteInformation from '../completeInformation/CompleteInformation';
import { Container, ImgLogo, Item, ItemsContainer, ItemText, NavbarContainer } from '../administrator/Administrator.styles';
import { Title,  } from './Employee.style';
import { logoKruger } from '../../assets/images';

const Employee = () => {
  const items = [
    { id: 'administrador', label: 'Administrador', element: 'administrador' },
    { id: 'empleado', label: 'Empleado', element: 'empleado' },
  ];
  let navigate = useNavigate();

  const goTo = (element) => () =>{
    navigate(`/${element}`);
  };

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
        <Title>Completa la siguiente información</Title>
        <CompleteInformation/>
      </Container>
    </>
  );
};

export default Employee;