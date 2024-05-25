import base_url from "./base_url";
import commonApi from "./capi";
//to get whole customer details

export const getCustomers=async ()=>{
    return await commonApi("","",`${base_url}/customer/`,"GET")
}

export const getSpecificCustomer=async (id)=>{
    return await commonApi("","",`${base_url}/customer/${id}/`,"GET")
}

export const addCustomer=async (header,data)=>{
    return await commonApi(header,data,`${base_url}/customer/`,"POST")
}

export const addService=async(id,data)=>{
    return await commonApi("",data,`${base_url}/customer/${id}/add_service/`,"POST")
}