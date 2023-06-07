import React, { useEffect } from 'react';
import './Coursedetail.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Usefetch } from '../../hooks/Usefetch';
export default function Coursedetail() {

const location=useLocation();
const {state:course}=location;
const {data,error,optiondata}=Usefetch(` http://localhost:8000/course/${course.id}`,'DELETE')
const navigate=useNavigate()
const handleedit=()=>{
navigate(`/edit/${course.id}`,{state:course})
}
const handledelete=()=>{
optiondata()
}

useEffect(()=>{
  if(data.length !== 0){
  const timer=setTimeout(()=>navigate('/'),3000);
  return ()=>clearTimeout(timer)

  }
},[data,navigate])


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
      <Button variant="primary" type="submit" onClick={handledelete}>
        Delete
      </Button>
      </div>
      </Card.Body>
    </Card>
    {
        data.length !==0 && <div>Course Deleted Successfully!</div>
      }
      {
        error && <h3>{error}</h3>
      }
    </>
  )
}
