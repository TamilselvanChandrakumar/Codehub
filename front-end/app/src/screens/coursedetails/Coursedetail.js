import React from 'react'
import './Coursedetail.css'
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function Coursedetail() {

const location=useLocation();
const {state}=location;
console.log(state);

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{state.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{state.qualification}</Card.Subtitle>
        <Card.Text>
             {state.course} passedout-{state.passedout}
        </Card.Text>
        <div className='button'>
        <Button variant="primary" type="submit">
        Edit
      </Button>
      <Button variant="primary" type="submit">
        Delete
      </Button>
      </div>
      </Card.Body>
    </Card>
    </>
  )
}
