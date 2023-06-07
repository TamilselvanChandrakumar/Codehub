import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { useLocation } from 'react-router-dom'
import { Usefetch } from '../../hooks/Usefetch';

export default function Editcourse() {
    const [name, setname] = useState('');
    const [dob, setdob] = useState('');
    const [mailid, setmailid] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [address, setaddress] = useState('')
    const [qualification, setqualificaiton] = useState('')
    const [passedout, setpassedout] = useState('')
    const [coursed, setcourse] = useState('')
    const [dateofjoining, setdateofjoining] = useState('')
    const [show, setShow] = useState(false);
    const [validationerror, setvalidationerror] = useState('')

    const [modifiedfield,setmodifiedfield]=useState('');
     const onnamechange=(e)=>{
        setname(e.target.value)
        setmodifiedfield({...modifiedfield,name:e.target.value})
     }
     const ondobchange=(e)=>{
        setdob(e.target.value)
         setmodifiedfield({...modifiedfield,dob:e.target.value})
     }
     const onmailidchange=(e)=>{
        setmailid(e.target.value)
         setmodifiedfield({...modifiedfield,mailid:e.target.value})
     }
     const onphonenumberchange=(e)=>{
        setphonenumber(e.target.value)
         setmodifiedfield({...modifiedfield,phonenumber:e.target.value})
     }
     const onaddresschange=(e)=>{
        setaddress(e.target.value)
         setmodifiedfield({...modifiedfield,address:e.target.value})
     }
     const onqualificationchange=(e)=>{
        setqualificaiton(e.target.value)
         setmodifiedfield({...modifiedfield,qualification:e.target.value})
     }

     const onpassedoutchange=(e)=>{
        setpassedout(e.target.value)
         setmodifiedfield({...modifiedfield,passedout:e.target.value})
     }
     const oncoursedchange=(e)=>{
        setcourse(e.target.value)
         setmodifiedfield({...modifiedfield,coursed:e.target.value})
     }
     const ondateofjoiningchange=(e)=>{
        setdateofjoining(e.target.value)
         setmodifiedfield({...modifiedfield,dateofjoining:e.target.value})
     }
    const navigate = useNavigate();
    const location = useLocation();
    const { state: course } = location;
    console.log(modifiedfield);
    const { data, error, optiondata } = Usefetch(` http://localhost:8000/course/${course.id}`, "PATCH")

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setvalidationerror("Name should not be empty")
            return;
        }
        else if (!dob) {
            setvalidationerror("Dob should not be empty")
            return
        }
        else if (!mailid) {
            setvalidationerror("mail should not be empty")
            return
        }
        else if (!phonenumber) {
            setvalidationerror("phonenumber should not be empty")
            return
        }
        else if (!address) {
            setvalidationerror("address should not be empty")
            return
        }
        else if (!qualification) {
            setvalidationerror("qualificaiton should not be empty")
            return
        }
        else if (!passedout) {
            setvalidationerror("passedout should not be empty")
            return
        }
        else if (!coursed) {
            setvalidationerror("course should not be empty")
            return
        }
        else if (!dateofjoining) {
            setvalidationerror("dateofjoining should not be empty")
            return
        }
        setvalidationerror("")
        optiondata(modifiedfield)

    }
    useEffect(() => {
        setname(course.name);
        setdob(course.dob);
        setmailid(course.mailid);
        setphonenumber(course.phonenumber);
        setaddress(course.address);
        setqualificaiton(course.qualification);
        setpassedout(course.passedout);
        setcourse(course.coursed);
        setdateofjoining(course.dateofjoining);

        if (data.length !== 0) {
            setShow(true)
            const timer = setTimeout(() => navigate('/'), 3000);
            return () => clearTimeout(timer)

        }
    }, [data,navigate,course.name,course.dob,course.mailid,course.phonenumber, course.address, course.qualification, course.passedout, course.coursed, course.dateofjoining]);

    return (
            <Form onSubmit={handlesubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail" value={name} onChange={onnamechange} >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" value={dob} onChange={ondobchange}>
                    <Form.Label>Dateofbirth</Form.Label>
                    <Form.Control type="text" placeholder="dateofbirth" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail" value={mailid} onChange={onmailidchange}>
                    <Form.Label>Mailid</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" value={phonenumber} onChange={onphonenumberchange}>
                    <Form.Label>Phonenumber</Form.Label>
                    <Form.Control type="number" placeholder="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" value={address} onChange={onaddresschange}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address" placeholder="address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" value={qualification} onChange={onqualificationchange}>
                    <Form.Label>Qualification</Form.Label>
                    <Form.Control type="text" placeholder="qualificaiton" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" value={passedout} onChange={onpassedoutchange}>
                    <Form.Label>Passedout</Form.Label>
                    <Form.Control type="number" placeholder="passedout" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" value={course} onChange={oncoursedchange}>
                    <Form.Label>Course</Form.Label>
                    <Form.Control type="select" placeholder="course" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" value={dateofjoining} onChange={ondateofjoiningchange}>
                    <Form.Label>Dateofjoining</Form.Label>
                    <Form.Control type="text" placeholder="Dateofjoining" />
                </Form.Group>

                {
                    validationerror && <Alert variant="danger" >
                        {validationerror}
                    </Alert>
                }

                {
                    data.length !== 0 && <Modal show={show}>
                        <Modal.Header>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Course Edited Successfully!</Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                }
                {
                    error && <h3>{error}</h3>
                }


                <Button variant="primary" type='submit'>
                    Edit
                </Button>
            </Form>

    )
}
