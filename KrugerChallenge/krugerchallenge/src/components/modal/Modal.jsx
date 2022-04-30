import React from 'react';
import { ModalContainer } from './Modal.style';

const Modal = ({ children, closeModal, modalState, sendInfoEdit }) => {
  if(!modalState) {
    return null;
  }

  const handleSendEdit = () =>{
    sendInfoEdit();
    closeModal();
  };

  return(
    <ModalContainer className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <h4 className="modal-card-title">Editar Datos</h4>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            {children}
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button" onClick={handleSendEdit}>Enviar</button>
        </footer>
      </div>
    </ModalContainer>
  );
};

export default Modal;
