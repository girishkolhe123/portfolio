import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Contact.css'


export const Contact = () => {
  return (
<div className='container'>
<div className='up'>
      <h1><span className='txt2'>Connect</span> <span className='txt1'>With</span> <span className='txt1'>Me</span></h1>
</div>

    <h4 className='contact' style={{textAlign:'left',color:'white'}}>Name</h4>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    
      <Form.Control type="email" placeholder="Enter Name"  />
    
    </Form.Group>
    </Form>

    <h4 className='contact' style={{textAlign:'left',color:'white',marginTop:'30px'}}>Email</h4>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    
      <Form.Control type="email" placeholder="Enter email" />
    
    </Form.Group>
    </Form>

    <h4 className='contact' style={{textAlign:'left',color:'white',marginTop:'30px'}}>Password</h4>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    
      <Form.Control type="email" placeholder="Enter Password"  />
    
    </Form.Group>
    </Form>

    <h4 className='contact' style={{textAlign:'left',color:'white',marginTop:'30px'}}>Message</h4>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    
      <textarea rows="3" cols="180" className='msg container' placeholder="Enter Message"><Form.Control   /></textarea>
    
    </Form.Group>
    </Form>

    <Row xs={1}>
        <Col >
        <Button variant='outline-info' className='btnn2'><span>Send</span></Button>
        </Col>
      </Row>

     
    </div>

  )
}
