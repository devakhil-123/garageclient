import React,{useEffect, useState} from 'react'
import { getCustomers } from '../apiservices/allapi'
import { Link } from 'react-router-dom'

function Home() {


    const [customerData,setCustomerData]=useState([])


    useEffect(()=>{

        getData()



    

    },[])


    const getData=async()=>{
        const result= await getCustomers()
        const customers = result.data
        console.log(customers)


        const current_date=new Date()
        const date = current_date.getUTCDate()
        const month = current_date.getUTCMonth()+1
        const year = current_date.getUTCFullYear()
        const pmonth = month.toString().padStart(2,"0");
        const pDay = date.toString().padStart(2,"0");
        const cDate = `${year}-${pmonth}-${pDay}`

        const res = customers?.filter(item=>item.added_date == cDate)
        console.log(res)
        setCustomerData(res)



        


    }
  return (

   
    



    <div className='p-5'>
        <h2>Today's Chart</h2>

        <table className='table table-dark table-bordered shadow mt-5'>
            <thead>
                <tr>
                    <th>Customer name</th>
                    <th>Custmer Phone number</th>
                    <th>Vehicle Number</th>
                    <th>Service</th>
                    <th></th>
                </tr>
            </thead>
            {/* <tbody>
                <tr>
                <td>Ajith</td>
                <td>98765434567</td>
                <td>KL 01 BB 3454</td>
                <td>Oil change</td>
                <td></td>
                </tr>
            </tbody> */}
            {
                customerData.length > 0 ?
                customerData.map(item=> (
                    <tbody>
                    <tr>
                        <td>{item.customer}</td>
                        <td>{item.phone}</td>
                        <td>{item.vehicle_number}</td>
                        <td>{item.status}</td>
                        <td>
                            <Link className='btn btn-primary' to={`/service${id}`}>service</Link>
                        </td>
                    </tr>
                    </tbody>
                ))
                :
                <h2 className='text-danger text-center'>NO customers available</h2>
            }
        </table>

    </div>
  )
}

export default Home