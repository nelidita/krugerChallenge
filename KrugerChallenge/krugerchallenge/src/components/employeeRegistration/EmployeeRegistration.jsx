import React from 'react';
import { Button, Container, ContentButton, Input } from './EmployeeRegistration.style';

const EmployeeRegistration = () => {

  return (
    <Container>
      <form method="post">
        <div>
          <label for="name">Nombres</label>
          <Input
            type="text"
            placeholder="María Alejandra"
            pattern="[a-z]{1,15}"
            title="Incluye tus nombres sin números o caracteres especiales"
            required
          />
        </div>
        <div>
          <label for="name">Apellidos</label>
          <Input
            type="text"
            placeholder="Pérez Artigas"
            pattern="[a-z]{1,15}"
            title="Incluye tus apellidos sin números o caracteres especiales"
            required
          />
        </div>
        <div>
          <label for="name">Cédula</label>
          <Input
            type="text"
            placeholder="12345678"
            pattern="[0-9]{10}"
            title="Incluye un valor numérico y único de 10 dígitos"
            required
          />
        </div>
        <div>
          <label for="email">Correo Electrónico</label>
          <Input
            type="email"
            placeholder="usuario@gmail.com"
            name="email"
            required
          />
        </div>
        <ContentButton>
          <Button type="submit">Registrar</Button>
        </ContentButton>
      </form>
    </Container>
  );
};

export default EmployeeRegistration;