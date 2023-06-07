import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useNavigate} from 'react-router-dom'

export default function Course({course}) {
const navigate=useNavigate()
  const handleclick=()=>{
     navigate(`/course/${course.id}` ,{state:course})
  }
  return (
    <>
    <Card style={{ width: '18rem' }} onClick={handleclick}>
      <Card.Header>Student Details</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Name:{course.name}</ListGroup.Item>
        <ListGroup.Item>D.o.b:{course.dateofbirth}</ListGroup.Item>
        <ListGroup.Item>Mailid:{course.mailid}</ListGroup.Item>
        <ListGroup.Item>Phonenumber:{course.phonenumber}</ListGroup.Item>
        <ListGroup.Item>Address:{course.address}</ListGroup.Item>
        <ListGroup.Item>Qualification:{course.qualification}</ListGroup.Item>
        <ListGroup.Item>Passedout:{course.passedout}</ListGroup.Item>
        <ListGroup.Item>Course:{course.coursed}</ListGroup.Item>
        <ListGroup.Item>Dateofjoining:{course.dateofjoining}</ListGroup.Item>
      </ListGroup>
    </Card>
    </>
  )
}
