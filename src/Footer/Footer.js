import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.css"
import './footer1.css';
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs' 
import {BsTwitter} from 'react-icons/bs'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const Footer = () => {
    return (
            
        <Navbar expand="lg"  bg="dark" className='footer'>
          <Container>
            <Navbar.Brand href="#" className='offset-5 mx-auto footer1'>&copy; Girish Kolhe All Rights Reserved 
          
              <Row>
              <Col style={{marginTop:'1px'}}>
              <BsWhatsapp style={{color:'white',fontSize:'22px'}}/>
              &emsp;&emsp;
              <BsInstagram style={{color:'white',fontSize:'22px'}}/>
              &emsp;&emsp;
              <BsLinkedin style={{color:'white',fontSize:'22px'}}/>
              &emsp;&emsp;
              <BsTwitter style={{color:'white',fontSize:'22px'}}/>
              
              </Col>
              </Row>
            </Navbar.Brand>
          </Container>
        </Navbar>
   
      );
}
