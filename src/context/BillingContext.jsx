import { createContext, useState } from "react";



export const billingContext = createContext()

export const BillingProvider = ({ children })=>{
    const [data, setData] = useState({})
    const [ nextPage, setNextPage ] = useState(1)
    const [activeButton, setActiveButton ] = useState(true)

    return(
        <billingContext.Provider value={{
            page: nextPage, setNextPage, 
            activeButton, setActiveButton,
            data, setData
        }}>
            { children }
        </billingContext.Provider>
    )
}
