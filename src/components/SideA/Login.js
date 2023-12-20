import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-4  mt-20 box">
        
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
     <div className=" flex items-center justify-center  ">
        <h3><u>LOGIN</u></h3>
        </div>
          <Form.Group className="mb-3 flex items-center justify-center" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control-lg"
                                        style={{ width: '450px' }}
            />
          </Form.Group>

          <Form.Group className="mb-3  flex items-center justify-center" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control-lg"
                                        style={{ width: '450px' }}
            />
          </Form.Group>
          <div className="d-grid gap-2 flex items-center justify-center p-4">
  <Button  type="Submit" className=" h-12">
    Log In
  </Button>
</div>

          
        </Form>
        <div className="d-grid gap-2 flex items-center justify-center" >
        <p>OR</p>
        </div>
   
        
        <div className="d-grid gap-2 flex items-center justify-center">
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
                                      style={{ width: '48px' }}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
