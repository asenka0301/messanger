import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import LoginForm from './LoginForm';

const LoginPage = () => (
  <Container fluid className="h-100" id="login">
    <Row className="h-100 justify-content-center align-content-center">
      <Col className="col-sm-3">
        <Card className="shadow-sm p-3">
          <Card.Body>
            <h2 className="mb-3 text-center">Войти</h2>
            <LoginForm />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default LoginPage;
