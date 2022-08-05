import "./App.css";
import React, { useEffect, useState } from "react";
import {Container, Row, Col, Button, Form, Stack, Alert} from "react-bootstrap";


function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [answer, setAnswer] = useState('');

  const getAnswer = async () => {

    const response = await fetch('http://localhost:5000/addNums', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({num1: input1, num2: input2}),
    })
    .then(response => response.json())
    .then((data) => {
      const {answer} = data;
      setAnswer(answer);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
 
  return (
    <Container fluid className="container">
      <Row className="justify-content-md-center">
        <Col md={8} className="inputBox">
            <Alert className="text-center">Add Two Numbers</Alert>
            <Stack direction="horizontal" gap={3}>
                  <Form.Control type="number" name="input1" placeholder="?" className="text-center inputFields" value={input1} onChange={(e) => setInput1(+e.target.value)} />
                  <Form.Label><h1 className="text-white">+</h1></Form.Label>
                  <Form.Control type="number" name="input2" placeholder="?" className="text-center inputFields" value={input2} onChange={(e) => setInput2(+e.target.value)} />
                  <Button size="lg" variant="success" type="submit" onClick={getAnswer}>=</Button>
                  <Form.Control type="number" placeholder="?" className="text-center inputFields" value={answer} readOnly/>
            </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
