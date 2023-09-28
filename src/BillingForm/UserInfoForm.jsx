import { useContext, useState } from "react"
import { billingContext } from "../context/BillingContext"
import { useForm } from "../hooks/useForm"

export const UserInfoForm = ()=>{
    const { onInputChange, completedInput } = useForm([], 4)
    const userInformation = ['Primer Nombre', 'Segundo Nombre', 'Primer Apellido', 'Segundo Apellido']

    
    return (
        <form className="flex flex-col gap-5 mt-5">
                <h2 className="self-center rounded-xl border-2 p-1 border-david-theme/90 text-david-theme/70 font-bold text-xl">Informacion del cliente</h2>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-row justify-center flex-wrap min-w-min gap-5">
                    {
                        userInformation.map( (information)=>(
                            <section className="flex flex-col">
                                <label className="font-bold text-david-theme/90" >{information}</label>
                                <input
                                onBlur={onInputChange}
                                name={information}
                                className="font-medium w-[10rem] text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="text"/>
                            </section>
                        ))
                    }
                    </div>
                    <section className="flex flex-col self-center">
                        <label className="font-bold text-david-theme/90 self-center">Numero de Celular:</label>
                        <input
                        name="Num"
                        className="font-medium w-48 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500"
                        type="text"
                        />
                    </section>
                </div>
        </form>
    )
}