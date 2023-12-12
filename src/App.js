import Example from "./components/header";
 import Card from "./components/Card";
 import Qwe from "./components/qwe";
 import {Container,Row,Col} from "react-bootstrap";
 import { Routes,Route } from "react-router-dom";
 import Login from "./components/SideA/Login";
 import Home from "./components/SideA/Home";
 import ProtectedRoute from "./components/SideA/ProtectedRoute";
 import Signup from "./components/SideA/Signup";
 import './App.css';
 import { UserAuthContextProvider } from "./context/UserAuthContext";
 function App() {
 
  return (
    <div>
    <Example  style={{ height: '80px' }}/>
    
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
        <Route path="/home" element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      } />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </UserAuthContextProvider>
          </Col>
      </Row>

     </Container>
    </div>

     
    
  );
}

export default App;
