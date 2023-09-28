import { useContext, useEffect, useState } from "react"
import { billingContext } from "../context/BillingContext"



export const useForm  = ( initialState = [] , numberInput )=>{
    const [ completedInput, setCompletedInput ] = useState(initialState)
     const { data, setData } = useContext(billingContext)
    const [ completedForm, setCompletedForm ] = useState(false)

    useEffect(( )=>{
        completedInput.map((input)=>{
            if( Object.values(input).toString().trim().length == 0){
                
            }
        })
    },[completedInput])

    const onInputChange = (event)=>{
        const value = [
           ...completedInput,
            {[event.target.name]: event.target.value}
        ]
        setCompletedInput(value)
        setData(value)
    }

    return {
        onInputChange, completedInput
    }
}