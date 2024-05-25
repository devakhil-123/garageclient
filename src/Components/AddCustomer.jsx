import React from 'react'
// import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCustomer } from '../apiservices/allapi';
import { toast } from 'react-toastify'
import { addCustomerResponseContext } from '../Context/CustomerContext';






    
function AddCustomer(){

  const {setAddCustomerResponse}=useContext(addCustomerResponseContext)
    {
      const [show, setShow] = useState(false);

      const [customerData, setCustomer]=useState({
        customer:"",phone:"",vehicle_number:"",kilometers:"",image:""
      })

      // console.log(customer)

      const handleSubmit=async()=>{
        console.log(customerData)
        const {customer,phone,vehicle_number,kilometers,image}=customerData
        if(!customer || !phone || !vehicle_number || !kilometers || !image){
          toast.warning('enter valid input');
        }
        else{

          const formData=new FormData()
          formData.append("customer",customerData.customer)
          formData.append("phone",customerData.phone)
          formData.append("vehicle_number",customerData.vehicle_number)
          formData.append("kilometers",customerData.kilometers)
          formData.append("image",customerData.image)

          const header={
            "Content-Type":"multipart/form-data"
          }

          const result=await addCustomer(header,formData)

          if(result.status==201){
            toast.success("customer added sucesfully")
            handleClose()
            addCustomer({
              customer:"",phone:"",vehicle_number:"",kilometers:"",images:""
            })
            setAddCustomerResponse(result)
          }
          else{
            console.log(result)
            toast.error("cutomer registration failed")
          }


        }
        

      }





    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        <>
         <button className='btn btn-info' onClick={handleShow}>Add Cutomer</button>
    
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
            <FloatingLabel controlId="floatingName" label="Name">
          <Form.Control type="text" placeholder="Password" onChange={(e)=>{setCustomer({...customerData,customer:e.target.value})}}/>
        </FloatingLabel>
            </Modal.Body>
            <Modal.Body>
            <FloatingLabel controlId="floatingName" label="phone">
          <Form.Control type="number" placeholder="Password" onChange={(e)=>{setCustomer({...customerData,phone:e.target.value})}}/>
        </FloatingLabel>
            </Modal.Body>
            <Modal.Body>
            <FloatingLabel controlId="floatingName" label="kilometers">
          <Form.Control type="number" placeholder="Password" onChange={(e)=>{setCustomer({...customerData,kilometers:e.target.value})}}/>
        </FloatingLabel>
            </Modal.Body>
            <Modal.Body>
            <FloatingLabel controlId="floatingName" label="Vehicle_registration">
          <Form.Control type="text" placeholder="Password" onChange={(e)=>{setCustomer({...customerData,vehicle_number:e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingName" label="Vehicle image">
          <Form.Control type="file" placeholder="Password" onChange={(e)=>{setCustomer({...customerData,image:e.target.files[0]})}}/>
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
    


export default AddCustomer