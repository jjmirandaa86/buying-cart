import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, Card, Container, Stack } from "react-bootstrap";
import LanguageContext from "../contexts/LanguageContext";
import ThemeContext from "../contexts/ThemeContext";

const Login = () => {
  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="m-0 row justify-content-center">
      <div className="col-auto">
        <Card
          bg={theme.toLowerCase()}
          key={theme}
          text={theme.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '22rem' }}
        >
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Card.Title>User Login</Card.Title>
            <Card.Text>
              <LoginForm />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to="/rememberuser" >If you dont know your password, remember it here.</Link>
    </>
  );
};

export default Login;