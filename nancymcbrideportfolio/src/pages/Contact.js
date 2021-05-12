import React from 'react';
import {Container, Form,Card, Button} from 'react-bootstrap'
const Contact = () => {
    return (
        <>

         <Container >
             <Card className=" mb-3 border-info" style={{backgroundColor: "light blue"}}>
                 <Card.Body>
            <h2 className="text-left text-dark">Contact<i class="far fa-address-card m-2 p-2 text-info"></i></h2>
            <hr/>
         <Form>
  <Form.Group controlId="formGroupEmail" >
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className="border-info" />
  </Form.Group>
  <Form.Group controlId="formGroupMessage">
  <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" placeholder="Message" className="border-info" />
    </Form.Group>
<Button variant="dark" className="px-5 mt-2 mb-3" type="submit" >Submit</Button>
 </Form>
</Card.Body>
</Card>
</Container>
</>
)
}

export default Contact