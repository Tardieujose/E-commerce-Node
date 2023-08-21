import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import "./Signup.css"
function Signup() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");  
  return (
    <Container>
    <Row className="justify-content-center">
        <Col md={5} className="Form-sign--container">
            <Form style={{ width: "100%" }}>
                <h1>Create Your Account</h1>
                <Form.Group className='mb-3'>
                    <Form.Label>Your Email Address</Form.Label>
                    <Form.Control type="Email" placeholder="Enter Email" value={Email} required onChange={(e)=> setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control type="Password" placeholder="Enter Password" value={Password} required onChange={(e)=> setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Button type="submit">Login</Button>
                </Form.Group>
                <p>You Don't Have An Account? <Link to="/signup">Create Now!</Link></p>
            </Form>
        </Col>
            
        <Col md={5} className="Sign-image-container"></Col>
    </Row>
</Container>
  )
}

export default Signup