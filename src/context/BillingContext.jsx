import { createContext, useState } from "react";



export const billingContext = createContext()

export const BillingProvider = ({ children })=>{

    const [ nextPage, setNextPage ] = useState(1)

    return(
        <billingContext.Provider value={{
            page: nextPage, setNextPage
        }}>
            { children }
        </billingContext.Provider>
    )
}
