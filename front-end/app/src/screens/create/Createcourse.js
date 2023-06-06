import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Createcourse() {

const [name,setname]=useState('');
const [dob,setdob]=useState('');
const [mailid,setmailid]=useState('')
const [phonenumber,setphonenumber]=useState('')
const [address,setaddress]=useState('')
const [qualification,setqualificaiton]=useState('')
const [passedout,setpassedout]=useState('')
const [course,setcourse]=useState('')
const [dateofjoining,setdateofjoining]=useState('')
 const handlesubmit=(e)=>{
    e.preventDefault();
 }

  return (
    <>
     <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail" value={name} onChange={(e)=>{setname(e.target.value)}} >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" value={dob} onChange={(e)=>{setdob(e.target.value)}}>
        <Form.Label>Dateofbirth</Form.Label>
        <Form.Control type="text" placeholder="dateofbirth" />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBasicEmail" value={mailid} onChange={(e)=>{setmailid(e.target.value)}}>
        <Form.Label>Mailid</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}}>
        <Form.Label>Phonenumber</Form.Label>
        <Form.Control type="number" placeholder="number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" value={address} onChange={(e)=>{setaddress(e.target.value)}}>
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" placeholder="address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" value={qualification} onChange={(e)=>{setqualificaiton(e.target.value)}}>
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" placeholder="qualificaiton" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" value={passedout} onChange={(e)=>{setpassedout(e.target.value)}}>
        <Form.Label>Passedout</Form.Label>
        <Form.Control type="number" placeholder="passedout" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" value={course} onChange={(e)=>{setcourse(e.target.value)}}>
        <Form.Label>Course</Form.Label>
        <Form.Control type="select" placeholder="course" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" value={dateofjoining} onChange={(e)=>{setdateofjoining(e.target.value)}}>
        <Form.Label>Dateofjoining</Form.Label>
        <Form.Control type="text" placeholder="Dateofjoining" />
      </Form.Group>
  
  
  
  
      <Button variant="primary" type="submit" onClick={(e)=>handlesubmit}>
        Submit
      </Button>
    </Form>
    </>
  )
}
