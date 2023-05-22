import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { addContact, setCurrentContactId } from '../slice/contactsSlice';

const AddContactModal = (props) => {
  const dispatch = useDispatch();
  const { modal, showModal } = props;
  const [contactName, setcontactName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    showModal(false);
    const contactId = _.uniqueId();
    dispatch(addContact({ contactName, contactId }));
    dispatch(setCurrentContactId(contactId));
  };

  return (
    <Modal show={modal} onHide={() => showModal(false)} centered>
      <Modal.Header closeButton={() => showModal(false)}>
        <Modal.Title>Добавить контакт</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-floating mb-3">
            <Form.Control
              name="phone"
              type="tel"
              pattern="[7]{1}[0-9]{10}"
              autoFocus
              required
              value={contactName}
              onChange={(e) => setcontactName(e.target.value)}

            />
            <Form.Label>Phone number</Form.Label>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="danger" className="me-2" onClick={() => showModal(false)}>
              Отменить
            </Button>
            <Button variant="secondary" type="submit">
              Сохранить
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddContactModal;
