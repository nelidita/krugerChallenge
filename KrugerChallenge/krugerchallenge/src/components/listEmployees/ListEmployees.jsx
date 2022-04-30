import React, { useEffect, useState } from 'react';
import { Container, Table, Icon, Tr } from './ListEmployees.style';
import { deleteIcon, editIcon } from '../../assets/images.js'
import Modal from '../modal/Modal';
import { Button, ContentButton, Input } from '../employeeRegistration/EmployeeRegistration.style';

const ListEmployees = () => {
  const [data, setData] = useState([]);
  // const [open, setOpen] = useState(false);
  // const toggleModal = () => setOpen(!open);

  useEffect(() => {
    fetch("http://localhost:5050/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data]);

  const handleDelete = (id) => () => {
    fetch(`http://localhost:5050/posts/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(json => console.log(json))
  };

  const sendInfoEdit = (event, id, identification, name, username, email) => () => {
    console.log(id)
    // fetch(`http://localhost:5050/posts/${id}`, {
    //   method: 'PATH',
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     identification,
    //     name,
    //     username,
    //     email
    //   }),
    // })
    // .then(response => response.json())
    // .then(json => console.log(json))
  };

  const [infoUser, setInfoUser] = useState({
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

  return (
  <Container className="div mt-5" align="center">
    <div className="row">
      <div className="col-md-16">
        <Table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col-md-6">Cédula</th>
              <th scope="col-md-6">Nombres</th>
              <th scope="col-md-6">Apellidos</th>
              <th scope="col-md-6">E-mail</th>
              <th scope="col-md-6">Fecha de nacimiento</th>
              <th scope="col-md-6">Dirección</th>
              <th scope="col-md-6">Teléfono</th>
              <th scope="col-md-6">Estado de vacunación</th>
              <th scope="col-md-6">Tipo de vacuna</th>
              <th scope="col-md-6">Fecha de vacunación</th>
              <th scope="col-md-6">Número de dosis</th>
              <th scope="col-md-6"></th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <Tr key={item.id}>
                <td>{item.identification}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.birthday}</td>
                <td>{item.adress}</td>
                <td>{item.phone}</td>
                <td>{item.vaccinationStatus}</td>
                <td>{item.typeVaccine}</td>
                <td>{item.vaccinationDate}</td>
                <td>{item.numberDoses}</td>
                <td>
                  <button onClick={handleDelete(item.id)}>
                    <Icon src={deleteIcon} alt="delete" />
                  </button>
                  <button
                    onClick={sendInfoEdit(item.id, item.identification, item. name, item.username, item.email)}
                  >
                    <Icon src={editIcon} alt="edit" />
                  </button>
                </td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    {/* <Modal
      sendInfoEdit
      closeModal={toggleModal}
      modalState={open}
    >
      <form method="post" onSubmit={sendInfoEdit}>
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
          <Button type="submit" >Enviar</Button>
        </ContentButton>
      </form>
    </Modal> */}
  </Container>
  )
};

export default ListEmployees;
