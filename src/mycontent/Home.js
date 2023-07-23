import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Image from 'react-bootstrap/Image'
import pic1 from '../images/img.JPG'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const Home = () => {
  return (
    <div>
      {/*         
        <img style={{borderRadius:"50%",marginTop:"20px",height:"350px",width:"300px"}}  src={pic1}/>
        <br/>
        
        <h2 className='name'>Girish Pralhad Kolhe</h2>

        <h4 style={{color:'white',marginBottom:'0px'}}>I am Student in R. C. Patel Institute Of Technology, Shirpur,  </h4> */}

      <Container>
        <Row>
          <Col xs={6}>
            <div>
              <img className='img' src={pic1} />
            </div>
          </Col >
          <Col xs={6} className>
            <div>
              <h4 className='txt4'>Hello, my name is,</h4>
            </div>
            <div>
              <h2 className='txt5'>Girish <span className='txt5_i'>Kolhe</span></h2>
            </div>
            <div>
              <h3 className='txt6'>Full Stack Developer</h3>
            </div>
            <div className='container'>
              <div className='btn1'>
                <Row xs={1} md={3}>
                  <Col>
                    <Button variant="outline-success" className=''><span>Download CV</span></Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
