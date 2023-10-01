import { useContext } from "react"
import { AddressForm } from "./AddressForm"
import { MovingForm } from "./MovingForm"
import { UserInfoForm } from "./UserInfoForm"
import { billingContext } from "../context/BillingContext"
import { OptionButtonPdf } from "./OptionButtonPdf"



export const BillingForm = ()=>{

    const { page } = useContext( billingContext )

    const onChangePage = (page)=>{
        if( page === 1 ){
            return (
                <UserInfoForm/>
            )
        } else if( page === 2 ){
            return (
                <AddressForm/>
            )
        }else if( page === 3 ){
            return (
                <MovingForm/>
            )
        }else if( page === 4){
            return (
                <OptionButtonPdf/>
            )
        }
    }

    return (
        <>{
            onChangePage(page)
        }
        </>
    )
}