import React, { useContext } from 'react'
// import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addService } from '../apiservices/allapi';
import { toast } from 'react-toastify';
import { addServiceResponseContext } from '../Context/CustomerContext';





    
function AddService(){

  const {setAddServiceResponse}=useContext(addServiceResponseContext)

  

  const [serviceData,setServiceData]=useState({
    title:"",notes:"",amount:""
  })
    {
      const [show, setShow] = useState(false);

      const handleSubmit=async()=>{
        console.log(serviceData)
        const {title,notes,amount}=serviceData
        if(!title || !notes || !amount)(
          toast.warning("invalid service inputs")
        )
        else{
          const formData=new FormData()
          formData.append("title",serviceData.title)
          formData.append("notes",serviceData.notes)
          formData.append("amount",serviceData.amount)

          const header={
            "Content-Type":"multipart/form-data"

          }
          const result=await addService(header,serviceData)
          if(result.status=201){
            toast.success("service added successfully")
            handleClose()
            setServiceData({
              title:"",notes:"",amount:""

            })
          }
          else{
            console.log(result)
            toast.error("service registration failed")
          }
        }
      }
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        <>
         <button className='btn btn-info' onClick={handleShow}>Add Service</button>
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <FloatingLabel controlId="floatingName" label="Service title">
          <Form.Control type="text" placeholder="Password" onChange={(e)=>{setServiceData({...serviceData,title:e.target.value})}}/>
        </FloatingLabel>
            <FloatingLabel controlId="floatingName" label="Notes">
          <Form.Control type="text" placeholder="Password" onChange={(e)=>{setServiceData({...serviceData,notes:e.target.value})}} />
        </FloatingLabel>
            <FloatingLabel controlId="floatingName" label="Amount">
          <Form.Control type="number" placeholder="Password" onChange={(e)=>{setServiceData({...serviceData,amount:e.target.value})}} />
        </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>Add</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  
    
  }
    


export default AddService