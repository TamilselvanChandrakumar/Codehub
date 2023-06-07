import React from 'react';
import './Coursedetail.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function Coursedetail() {

const location=useLocation();
const {state:course}=location;

const navigate=useNavigate()
const handleedit=()=>{
navigate(`/edit/${course.id}`,{state:course})
}

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{course.qualification}</Card.Subtitle>
        <Card.Text>
             {course.coursed} passedout-{course.passedout}
        </Card.Text>
        <div className='button'>
        <Button variant="primary" type="submit" onClick={handleedit}>
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
