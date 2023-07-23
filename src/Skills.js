import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import html_card from '../images/html_card.jpg'
import css_card from '../images/css_card.jpg'
import java_card from '../images/java_card.jpg'
import js_card from '../images/js_card.jpg'
import CPP_card from '../images/CPP_card.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Skills = () => {
  return (
    <Container id="cards">
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height:'10rem' }} variant="top" src={html_card} />
            <Card.Body>
              <Card.Title>HTML</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height:'10rem' }} variant="top" src={css_card} />
            <Card.Body>
              <Card.Title>CSS</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={java_card} />
            <Card.Body>
              <Card.Title>JAVA</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{marginTop: '14px'}}>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height:'10rem' }} variant="top" src={js_card} />
            <Card.Body>
              <Card.Title>JavaScript</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height:'10rem' }} variant="top" src={CPP_card} />
            <Card.Body>
              <Card.Title>CPP</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={java_card} />
            <Card.Body>
              <Card.Title>JAVA</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
