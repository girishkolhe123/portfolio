import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import './About.css'
import image7 from '../images/img.JPG'
import 'animate.css';
import res from './Resume.pdf'

export const About = () => {
  return (
    <div>

<Container>
            <Row className='row1'>
                <Col>
                    <div className='container offset-1'>
                        <img
                            className="d-block self"
                            src={image7}
                            alt="First slide"
                        />
                    </div>
                </Col>
                <Col>
                    <h1 className='aboutme'>About Me</h1>
                    <h3 id='text3'>Developer <span id='text4'>And Designer</span></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condiment
                    </p>

                    <Row>
                        <Col xs={4} md={3}>

                            <a href={res} download={"GirishKolhe"} target='_blank'>
                            <button className='text-white button10'>Download CV</button>
                            </a>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>

        <hr className="hrline"/>

    <div className="container clg">
    <Row>
        <Col>
      <div>
          <h1 className='wow animate__animated animate__fadeInUp' id='text1'>Educ<span id='text2'>ation</span></h1>
        </div>
        </Col>
        </Row>
        <div className="allc">
      <Row>
        <Col >
        <Card border="dark" style={{width: '28rem', height:'14rem',marginBottom:'52px',marginRight:'75px'}}>
        {/* <Card.Header>Primary Education Std </Card.Header> */}
        <Card.Body className="car1b">
          <Card.Title className="car1tf"><b>Primary Education</b></Card.Title>
          <hr/>
          <Card.Text className="car1bf">
           Completed Primary Education in Shree Swaminarayan Prathmik Vidyalay, Savda, Tal Raver, Dist Jalgaon
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col  >
        <Card border="dark" style={{ width: '28rem', height:'14rem',marginBottom:'52px'}}>
        {/* <Card.Header>Secondary Education</Card.Header> */}
        <Card.Body className="car2b">
          <Card.Title className="car2tf"><b>Secondary Education</b></Card.Title>
          <hr/>
          <Card.Text className="car2bf">
            Completed Secondary Education in Shree Swaminarayan Madhyamik Vidyalay, Savda, Tal Raver, Disst Jalgaon
            </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        </Row>
      
      <Row>
        <Col >
        <Card border="dark" style={{width: '28rem', height:'14rem',marginBottom:'52px',marginRight:'75px'}}>
        {/* <Card.Header>Bachelors Degree</Card.Header> */}
        <Card.Body className="car3b">
          <Card.Title className="car3tf"><b>Higher Secondary Education</b></Card.Title>
          <hr/>
          <Card.Text className="car3bf">
           Completed 11th & 12th Science in Municipal High School ,Faizpur, Tal Yawal, Dist Jalgaon 
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col >
        <Card border="dark" style={{ width: '28rem', height:'14rem',marginBottom:'52px'}} >
        {/* <Card.Header>Higher Education</Card.Header> */}
        <Card.Body className="car4b">
          <Card.Title className="car4tf"><b>Bachelors in Computer Engineering</b></Card.Title>
          <hr/>
          <Card.Text className="car4bf">
           Currently in TY Btech of Computer Engineering With 7.94 CGPA
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
       
      </Row>
      </div>
    </div>
    </div>
  );
};