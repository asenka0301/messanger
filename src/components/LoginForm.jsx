import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/index';

const LoginForm = () => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}
      `);
      if (response.status === 200) {
        auth.logIn({ idInstance, apiTokenInstance });
        navigate('/');
      }
    } catch (errors) {
      if (errors.isAxiosError && errors.response.status === 401) {
        console.log('Пользователь неавторизован');
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="idInstance"
          autoFocus
          required
          autoComplete="idInstance"
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control
          type="password"
          placeholder="apiTokenInstance"
          autoComplete="apiTokenInstance"
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstance(e.target.value)}
        />
      </Form.Group>
      <Button className="submitButton" type="submit">Войти</Button>
    </Form>
  );
};

export default LoginForm;
