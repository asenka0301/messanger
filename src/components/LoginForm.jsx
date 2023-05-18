import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => (
  <Form>
    <Form.Group className="mb-4">
      <Form.Control type="text" placeholder="idInstance" />
    </Form.Group>
    <Form.Group className="mb-4">
      <Form.Control type="password" placeholder="apiTokenInstance" />
    </Form.Group>
    <Button className="submitButton" type="submit">Войти</Button>
  </Form>
);

export default LoginForm;
