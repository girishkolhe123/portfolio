import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Skill.css'
import c from '../images/c.png'
import java from '../images/java.png'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'animate.css';

export const Skill = () => {
    const now1 = 60;
    const now2 = 40;
    const now3 = 40;
    const now4 = 40;
    const now5 = 40;
    const now6 = 40;
    return (
      <div>
        <div className='container'>
          <h1 className='wow animate__animated animate__fadeInDown' id='text1'>Ski<span id='text2'>lls</span></h1>
        </div>
        <div className='container'>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <Card className='card1'>
                  <Card.Img variant="top" className='c mx-auto' src={c} />
                  <Card.Body>
                    <Card.Title>C</Card.Title>
                    <Card.Text>
                      C is a general-purpose programming language created by Dennis
                      Ritchie at the Bell Laboratories in 1972.C is strongly associated with UNIX, as it was developed to write the UNIX operating system.
  
                    </Card.Text>
                    <ProgressBar  variant="primary" animated now={now1} label={`${now1}%`} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
  
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <Card className='card2'>
                  <Card.Img variant="top" className='java mx-auto' src={java} />
                  <Card.Body>
                    <Card.Title>Java</Card.Title>
                    <Card.Text>
                    Java is a popular programming language, created in 1995.
                    It is owned by Oracle, and more than 3 billion devices run Java.
                    Java is used to develop mobile apps, web apps, desktop apps and much more.
                    </Card.Text>
                     
                     <ProgressBar variant="warning" animated now={now2} label={`${now2}%`} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
  
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <Card className='card3'>
                  <Card.Img variant="top" className='html mx-auto' src={html} />
                  <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Card.Text>
                    HTML is the standard markup language for creating Web pages.
                    HTML stands for Hyper Text Markup Language.HTML consists of a series of elements.
                    HTML describes the structure of a Web page
                    </Card.Text>
                    <ProgressBar variant="danger" now={now3} label={`${now3}%`} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
  
  
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <Card className='card4'>
                  <Card.Img variant="top" className='css mx-auto' src={css} />
                  <Card.Body>
                    <Card.Title>CSS</Card.Title>
                    <Card.Text>
                    CSS is the language we use to style a Web page.CSS stands for Cascading Style Sheets
                    CSS describes how HTML elements are to be displayed on screen or in other media.
                    </Card.Text>
                    <ProgressBar variant="primary" animated now={now4} label={`${now4}%`} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
  
  
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <Card className='card5'>
                  <Card.Img variant="top" className='js mx-auto' src={js} />
                  <Card.Body>
                    <Card.Title>JavaScript</Card.Title>
                    <Card.Text>
                    JavaScript is the world's most popular programming language.
                    JavaScript is the programming language of the Web.JavaScript.com is a resource for the JavaScript community.
  
  
                    </Card.Text>
                    <ProgressBar  variant="warning" animated now={now5} label={`${now5}%`} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
  
  
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <Card className='card6'>
                  <Card.Img variant="top" className='react mx-auto' src={react} />
                  <Card.Body>
                    <Card.Title>React</Card.Title>
                    <Card.Text>
                    React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
                    React is a tool for building UI components.
  
  
                    </Card.Text>
                    <ProgressBar variant="primary" animated now={now6} label={`${now6}%`} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
  
        
        
        
        
      </div>
      
    );
}
