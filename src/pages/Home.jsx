import React from 'react'
import { useEffect,useState } from 'react'
import { getCustomer } from '../ApiServices/allApis'
import {Link,useNavigate} from 'react-router-dom'

function Home() {
    const [customerData,setCustomerdata]=useState([])
    useEffect(()=>{
        getData()
    },[])
    

    const getData=async()=>{

        const header={
            "Content-Type":"application/json",
            "Authorization":`Token ${sessionStorage.getItem('token')} `
        }
        const result=await getCustomer(header)
        const customers = result.data
        console.log(customers)

        const current_date = new Date()
        const date = current_date.getUTCDate()
        const month = current_date.getUTCMonth()+1 
        const year = current_date.getUTCFullYear()
        const pMonth = month.toString().padStart(2,"0");
        const pDay = date.toString().padStart(2,"0");
        const cdate=`${year}-${pMonth}-${pDay}`
        console.log(cdate);

        const res = customers?.filter(item => item.added_data == cdate)
        console.log(res)
        setCustomerdata(res)
    }

    const logout=()=>{
       nav('/')
       sessionStorage.removeItem('token')
    }



  return (
    <>
        <h2 className='text-center text-warning'>Today's Chart</h2>
        <div>
        <Link className='btn btn-outline-light' style={{backgroundColor:'green'}} to={'/customer'}>
            Customer
            <i className="fa-solid fa-arrow-right" />
          </Link>
          <button className >Logout</button>
        </div>
        <table className='table table-dark table-bordered shadow mt-5'>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Phone Number</th>
                    <th>Vehicle Number</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    customerData.length > 0 ?
                    customerData.map(item => (
                        <tr>
                            <td>{item.customer}</td>
                            <td>{item.phone}</td>
                            <td>{item.vehicle_number}</td>
                            <td>{item.status}</td>
                            <td> <Link className='btn btn-outline-light' style={{backgroundColor:'red'}} to={`/service/${item.id}`}>Services</Link></td>
                        </tr>
                        ))
                :
                <h3 className='text-danger text-center'>No customers available</h3>
                }
                
            </tbody>

             
        </table>
    </>
  )
}

export default Home