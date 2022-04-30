import React from 'react';
import { Button, Container, ContentButton, Input } from '../employeeRegistration/EmployeeRegistration.style';
import { Select } from './CompleteInformation.style';

const CompleteInformation = () => {

  return (
    <Container>
      <form method="post">
        <div>
          <label>Fecha de nacimiento</label>
          <Input
            type="date"
            placeholder="15/02/1989"
            pattern="[0-9]{10}"
            title="Incluye tu fecha de nacimiento dd/mm/aaaa"
            required
          />
        </div>
        <div>
          <label>Direccion</label>
          <Input
            type="text"
            placeholder="calle 50 #145-12"
            pattern="[a-z,0-9,#,.,\s]{0,20}"
            title="Incluye tu dirección de domicilio"
            required
          />
        </div>
        <div>
          <label>Teléfono</label>
          <Input
            type="text"
            placeholder="3144569066"
            pattern="[0-9]{6,15}"
            title="Incluye un valor numérico, sin espacios, ni caracteres especiales"
            required
          />
        </div>
        <div>
          <label>Estado de vacunación</label>
          <Select placeholder="Selecciona una opción" required>
            <option>Vacunado</option>
            <option>No Vacunado</option>
          </Select>
        </div>
        <div>
          <label>Tipo de vacuna</label>
          <Select placeholder="Selecciona una opción" required>
            <option>Sputnik</option>
            <option>AstraZeneca</option>
            <option>Pfizer</option>
            <option>Jhonson&Jhonson</option>
          </Select>
        </div>
        <div>
          <label>Fecha de vacunación</label>
          <Input
            type="date"
            placeholder="15/02/2022"
            pattern="[0-9]{10}"
            title="Incluye la fecha de vacunación dd/mm/aaaa"
            required
          />
        </div>
        <div>
          <label>Número de dosis</label>
          <Input
            type="text"
            placeholder="1"
            pattern="[1-9]{1}"
            title="Incluye un valor numérico, sin espacios, ni caracteres especiales"
            required
          />
        </div>
        <ContentButton>
          <Button type="submit">Enviar</Button>
        </ContentButton>
      </form>
    </Container>
  );
};

export default CompleteInformation;