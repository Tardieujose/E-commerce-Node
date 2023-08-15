import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");  

  function handleSubmit() {}  
  return (
    <Container>
        <Row className="justify-content-center">
            <Col md={8} className="Form-login--container">
                <Form style={{ width: "100%" }}>
                    <h1>Log To Your Account</h1>
                    <Form.Group>
                        <Form.Label>Your Email Address</Form.Label>
                        <Form.Control type="Email" placeholder="Enter Email" value="" required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Your Password</Form.Label>
                        <Form.Control type="Password" placeholder="Enter Password" value="" required />
                    </Form.Group>

                    <Form.Group>
                        <Button type="submit">Login</Button>
                    </Form.Group>
                    <p>You Don't Have An Account? <Link to="/signup">Create Now!</Link></p>
                </Form>
            </Col>
                
            <Col md={8}></Col>
        </Row>
    </Container>
  )
}

export default Login