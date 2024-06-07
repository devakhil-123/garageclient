import React, {useEffect,useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import AddService from '../Components/AddService'
import { useParams } from 'react-router-dom'
import { getSpecificCustomer } from '../apiservices/allapi'

function Service() {

  const {id} = useParams()
  const [customer,setCustomer] = useState({})

  useEffect(()=>{
    getData()

  },[addServiceResponse])

  const getData=async()=>{
    const header={
      "Content-Type":"application/json",
      "Authorization":`Token${sessionStorage.getItem('token')}`
    }

  



// const getData = async()=>{
  const result = await getSpecificCustomer(id,header)

  if (result.status == 200)(
    setCustomer(result.data)
  )
  else (
    console.log(result)
  )
}
console.log(customer)










  return (
<>
<div className='container-fluid p-5'>
  <h3 className='mb-3'>Services</h3>
  <div>

  </div>
  <Row> 
    <Col sm={6} md={2}>
      <AddService id={id}/>
    </Col>
    <Col>
    <table className='table table-info table-bordered'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Notes</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {
        customer?.services?.length>0 ?
        customer.services.map(item=>(
          <tr>
            <td>{item.title}</td>
            <td>{item.notes}</td>
            <td>{item.amount}</td>
          </tr>
        ))
        :
        <h3 className='text-danger'>NO service available</h3>
        }
     
      </tbody>
    </table>
    </Col>
    </Row>
</div>
</>  
)
}

export default Service