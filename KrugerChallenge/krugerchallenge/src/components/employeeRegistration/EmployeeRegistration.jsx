import React, { useState } from 'react';
import { Button, Container, ContentButton, Input } from './EmployeeRegistration.style';

const EmployeeRegistration = () => {
  const id = Math.floor((Math.random() * (200 - 1 + 1)) + 1);

  const [infoUser, setInfoUser] = useState({
    "id": id,
    "identification": "",
    "name": "",
    "username": "",
    "email": ""
  })

  const handleInputChange = (event) => {
      setInfoUser({
          ...infoUser,
          [event.target.name] : event.target.value
      })
  };

  const handleRegister = (event) => {
    event.preventDefault();

    fetch('http://localhost:5050/posts', {
      method: "POST",
      body: JSON.stringify(infoUser),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json));

    event.target.reset();
  };

  return (
    <Container>
      <form method="post" onSubmit={handleRegister}>
        <div>
          <label>Nombres</label>
          <Input
            type="text"
            name="name"
            placeholder="María Alejandra"
            pattern="[a-z,A-Z,\s]{1,20}"
            title="Incluye tus nombres sin números o caracteres especiales"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Apellidos</label>
          <Input
            type="text"
            name="username"
            placeholder="Pérez Artigas"
            pattern="[a-z,A-Z,\s]{1,20}"
            title="Incluye tus apellidos sin números o caracteres especiales"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Cédula</label>
          <Input
            type="text"
            name="identification"
            placeholder="12345678"
            pattern="[0-9]{10}"
            title="Incluye un valor numérico y único de 10 dígitos"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Correo Electrónico</label>
          <Input
            type="email"
            name="email"
            placeholder="usuario@gmail.com"
            onChange={handleInputChange}
            required
          />
        </div>
        <ContentButton>
          <Button type="submit" >Registrar</Button>
        </ContentButton>
      </form>
    </Container>
  );
};

export default EmployeeRegistration;