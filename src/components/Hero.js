import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Hero(props){
  console.log(props)
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.title && <h1 style={{fontSize:'10vw'}} className="">{props.title}</h1>}
            {props.subTitle && <h3 style={{ fontSize: '6vw' }} className="">{props.subTitle}</h3>}
            {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );

}

export default Hero;