import React,{ createContext, useState } from "react"

export const addCustomerResponseContext = createContext()
export const addServiceResponseContext = createContext()

function CustomerContext({children}){
    const [addCustomerResponse,setAddcustomerResponse] = useState("")
    const [addServiceResponse,setAddServiceResponse] = useState("")

    return (
        <>
        <addCustomerResponseContext.Provider value={{addCustomerResponse,setAddcustomerResponse}}>
            <addServiceResponseContext.Provider value={{addServiceResponse,setAddServiceResponse}}>
            {children}
            </addServiceResponseContext.Provider>

        </addCustomerResponseContext.Provider>
        </>
    )
}

export default CustomerContext
