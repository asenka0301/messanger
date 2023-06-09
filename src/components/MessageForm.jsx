import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';

const MessageForm = () => {
  const [messageContent, setMessageContent] = useState('');
  const userData = JSON.parse(localStorage.getItem('userData'));

  const allContacts = useSelector((state) => {
    const { contacts } = state.contactsReducer;
    return contacts;
  });

  const contactId = useSelector((state) => {
    const { currentContactId } = state.contactsReducer;
    return currentContactId;
  });

  const currentContact = allContacts.find((contact) => contact.contactId === contactId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageContent('');
    const dataMessage = JSON.stringify({ chatId: `${currentContact.contactName}@c.us`, message: messageContent });

    try {
      const response = await axios
        .post(
          `https://api.green-api.com/waInstance${userData.idInstance}/sendMessage/${userData.apiTokenInstance}`,
          dataMessage,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
      console.log(response);
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <div className="mt-auto px-5 py-3">
      <Form noValidate className="py-1 border rounded-2" onSubmit={handleSubmit}>
        <Form.Group className="input-group">
          <Form.Control
            name="body"
            id="body"
            aria-label="Новое сообщение"
            className="border-0 p-0 ps-2"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
          />
          <Button type="submit" variant="group-vertical">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
              <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
            <span className="visually-hidden">Отправить</span>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default MessageForm;
