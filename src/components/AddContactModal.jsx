import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddContactModal = (props) => {
  const { modal, showModal } = props;
  return (
    <Modal show={modal} onHide={() => showModal(false)} centered>
      <Modal.Header closeButton={() => showModal(false)}>
        <Modal.Title>Добавить контакт</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="form-floating mb-3">
          <Form.Control
            name="phone"
            type="tel"
            autoFocus
          />
          <Form.Label>Phone number</Form.Label>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">
            Сохранить
          </Button>
          <Button variant="danger" onClick={() => showModal(false)}>
            Отменить
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddContactModal;
