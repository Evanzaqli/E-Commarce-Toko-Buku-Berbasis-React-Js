import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function SignUp({ show, handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>
        <div className="text-center text-muted delimiter mt-3">or use a social network</div>
        <div className="d-flex justify-content-center social-buttons mt-3">
          <button type="button" className="btn btn-secondary btn-round me-2" data-toggle="tooltip" data-placement="top" title="Twitter">
            <i className="fab fa-twitter"></i>
          </button>
          <button type="button" className="btn btn-secondary btn-round me-2" data-toggle="tooltip" data-placement="top" title="Facebook">
            <i className="fab fa-facebook"></i>
          </button>
          <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="google">
            <i className="fab fa-google"></i>
          </button>
        </div>
        <div className="modal-footer d-flex justify-content-center mt-3">
          <div className="signup-section">Already have an account? <a href="#a" className="text-info">Login</a>.</div>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
}

export default SignUp;
