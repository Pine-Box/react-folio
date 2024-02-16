import React from 'react';
import Hero from '../Hero/';
import Container from '../Container/';
import Row from '../Row/';
import Col from '../Col/';

function Home(){
   return(
<div>
      <Hero backgroundImage="">
        <h1>Example</h1>
        <h2>Lorem</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            <p>
             Left Side
            </p>
            </Col>
            <Col size="md-4">
         <p>
            Right side
          </p>
          </Col>
        </Row>
      </Container>
    </div>
   )

};

export default Home;