import { useContext, useEffect, useState } from "react"
import { billingContext } from "../context/BillingContext"

export const MovingForm = ()=>{

    const { setActiveButton, data, setData } = useContext(billingContext)
    const [workingHours, setWorkingHours] = useState('')
    const [basePrice, setBasePrice] = useState('')
    const [extraHours, setExtraHours] = useState('')
    const [extraPrice, setExtraPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(()=>{
        setActiveButton(true)
    }, [])

    const validInput = ()=>{
        if( workingHours.trim() !== '' && 
        basePrice.trim() !== '' && 
        extraHours.trim() !== '' && 
        extraPrice.trim() !== '' && 
        description.trim() !== ''){
            setActiveButton(true)
        }else{
            setActiveButton(false)
        }
    }

    const onHandleWorkingHours= (e)=>{
        setWorkingHours(e.target.value)
        setData({
            ...data,
            workingHours: e.target.value
        })
        validInput()
    }
    const onHandleBasePrice = (e)=>{
        setBasePrice(e.target.value)
        setData({
            ...data,
            basePrice: e.target.value
        })
        validInput()
    }

    const onHandleExtraHours= (e)=>{
        setExtraHours(e.target.value)
        setData({
            ...data,
            extraHours: e.target.value
        })
        validInput()
    }
    const onHandleExtraPrice = (e)=>{
        setExtraPrice(e.target.value)
        setData({
            ...data,
            extraPrice: e.target.value
        })
        validInput()
    }
    
    const onHandleDescription = (e)=>{
        setDescription(e.target.value)
        setData({
            ...data,
            description: e.target.value
        })
        validInput()
    }

    return (
        <form className="flex flex-col gap-5 mt-1 p-2">
           <h2 className="self-center rounded-xl border-2 p-1 border-david-theme/90 text-david-theme/70 font-bold text-xl">Informacion de la mudanza</h2>
           <div className="flex flex-row gap-2 justify-center ">
           <section className="flex flex-col gap-2">
                <label className="font-bold text-david-theme/90" >Horas base:</label>
                <input
                onChange={onHandleWorkingHours}
                min={0}
                name="workingHours"
                className="text-center font-medium w-28  text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="number"/>
            </section>
            <section className="flex flex-col gap-2">
                <label className="font-bold text-david-theme/90" >Precio:</label>
                <input
                onChange={onHandleBasePrice}
                min={0}
                name="basePrice"
                className="text-center font-medium w-28  text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="number"/>
            </section>
           </div>
           <div className="flex ml-2 flex-row gap-2 justify-center ">
                <section className="flex flex-col gap-2">
                    <label className="font-bold  text-david-theme/90" >Horas Extra:</label>
                    <input
                    onChange={onHandleExtraHours}
                    min={0}
                    name="extraHours"
                    className="text-center font-medium w-28 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="number"/>
                </section>
                <section className="flex flex-col gap-2">
                    <label className="font-bold  text-david-theme/90" >Precio por hora:</label>
                    <input
                    onChange={onHandleExtraPrice}
                    min={0}
                    name="extraPrice"
                    className="text-center font-medium w-28 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="number"/>
                </section>
           </div>
            <section className="flex flex-col self-center gap-1">
                <label className="font-bold text-david-theme/90" >Descripcion:</label>
                <textarea
                onChange={onHandleDescription}
                min={0}
                name="extraPrice"
                className="text-center font-medium w-52 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" />
            </section>
         </form>
    )
}