import React ,{useState}from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userRegister } from '../apiservices/allapi'
function Reg() {


    const [userData,setUserData]=useState({
        email:"",username:"",password:""
    })

    const nav=useNavigate()

    const handleRegister=async()=>{
        console.log(userData)
        const {username,email,password}=userData
        if(!username || !email || !password){
            toast.warning("Enter Valid Inputs")
        }
        else{
            const result=await userRegister(userData)
            if(result.status==201){
                toast.success("Mechanic Registration Successfull")
                setUserData({
                    email:"",username:"",password:""
                })
                nav('/')
            }
            else{
                console.log(result)
                toast,error("Registration Failed")
            }
        }}


  return (
    <>
    <div className='w-100 justify-content-center align-items-center d-flex'>
        <div className='w-50 bg-light p-5 border shadow'>
            <h2>Mechanic Registration</h2>
            <form action="">
                <input type="email" onChange={(e)=>{setUserData({...userData,email:e.target.value})}} placeholder='enter email' id='' className='form-control my-3' />
                <input type="text" onChange={(e)=>{setUserData({...userData,username:e.target.value})}} placeholder='Enter username' id='' className='form-control my-3' />
                <input type="password" onChange={(e)=>{setUserData({...userData,password:e.target.value})}} placeholder='Enter password' id='' className='form-control my-3' />
                <div>
                    <button className='btn btn-success' onClick={handleRegister}>Login</button>
                    <Link className='btn btn-warning' to={'/'}>Already a user? Sign up..</Link>

                </div>
            </form>
        </div>
    </div>
    </>  )
}

export default Reg