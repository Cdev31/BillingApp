import { useContext, useEffect, useState } from "react"
import { MapPinIcon } from '@heroicons/react/24/solid'
import { billingContext } from "../context/BillingContext"


export const AddressForm = ()=>{
    
    const { setActiveButton, setData, data } = useContext(billingContext)
    const [ startMoving, setStartMoving ] = useState({
        postalCode: '',
        address: ''
    })
    const [ finishMoving, setFinishMoving ] = useState({
        postalCode: '',
        address: ''
    })

    useEffect(()=>{
        setActiveButton(true)
    }, [])

    const validInput = ()=>{
        if( startMoving.postalCode.trim() !== '' && 
        startMoving.address.trim() !== '' && 
        finishMoving.postalCode.trim() !== '' && 
        finishMoving.address.trim() !== ''){
            setActiveButton(true)
        }else{
            setActiveButton(false)
        }
    }

    const onHandleStartMoving = (e)=>{
        setStartMoving({
            ...startMoving,
            [e.target.name]: e.target.value
        })
        setData({
            ...data,
            from: startMoving
        })
        validInput()
    }

    const onHandleFinishMoving = (e)=>{
        setFinishMoving({
            ...finishMoving,
            [e.target.name]: e.target.value
        })
        setData({
            ...data,
            to: finishMoving
        })
        validInput()
    }
  
    return (
        <form className="flex flex-col gap-3 mt-3">
            <h2 className="m-1 self-center rounded-xl border-2 p-1 border-david-theme/90 text-david-theme/70 font-bold text-xl">Informacion de lugar de la mudanza</h2>
            <h2 className="self-center font-bold text-xl mt-1 text-david-theme/70">Inicio de la mudanza</h2>
            <div className="flex flex-wrap gap-2 justify-center mt-5">
                <section className="flex flex-col self-center">
                    <label className="font-bold text-sm text-david-theme/90 self-center">Codigo Postal:</label>
                    <input
                    onChange={onHandleStartMoving}
                    name="postalCode"
                    className="font-medium w-[7rem] text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="number"/>
                </section>
                <section className="flex flex-col self-center">
                    <label className="font-bold text-sm text-david-theme/90">Direccion:</label>
                    <div>
                    <MapPinIcon className="absolute mt-[6px] w-6 h-6 text-david-theme/90"/>
                    <input
                     onChange={onHandleStartMoving}
                    name="address"
                    className="font-medium w-48 pl-6 text-black/80 border-2 rounded-lg p-1 border-david-theme/70  focus:outline-blue-500" type="text"/>
                    </div>
                </section>
            </div> 
            <h2 className="self-center font-bold text-xl mt-1 text-david-theme/70">Destino de la mudanza</h2>
            <div className="flex flex-wrap gap-2 justify-center mt-5">
                <section className="flex flex-col self-center">
                    <label className="font-bold text-sm text-david-theme/90 self-center">Codigo Postal:</label>
                    <input
                    onChange={onHandleFinishMoving}
                    name="postalCode"
                    className="font-medium w-[7rem] text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="number"/>
                </section>
                <section className="flex flex-col self-center">
                    <label className="font-bold text-sm text-david-theme/90">Direccion:</label>
                    <div>
                    <MapPinIcon className="absolute mt-[6px] w-6 h-6 text-david-theme/90"/>
                    <input
                    onChange={onHandleFinishMoving}
                    name="address"
                    className="font-medium w-48 pl-6 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 focus:outline-blue-500" type="text"/>
                    </div>
                </section>
            </div> 
        </form>
    )
}