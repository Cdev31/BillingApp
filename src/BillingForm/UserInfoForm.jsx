import { useContext, useState } from "react"
import { PhoneIcon, UserIcon } from '@heroicons/react/24/solid'
import { billingContext } from "../context/BillingContext"

export const UserInfoForm = ()=>{
    const { setActiveButton, setData, data } = useContext(billingContext)
    const [name, setName] = useState('')
    const [surname,setSurname] = useState('')
    const [phone,setPhone] = useState('')

    const validInput = ()=>{
        if( name.trim() !== '' && surname.trim() !== '' && phone.trim() !== ''){
            setActiveButton(true)
        }else{
            setActiveButton(false)
        }
    }

    const handleName = (e)=>{
        setName(e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        validInput()
    }

    const handleSurname = (e)=>{
        setSurname(e.target.value)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        validInput()
    }

    const handlePhone = (e)=>{
        setPhone(e.target.value)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        validInput()
    }

    return (
        <form className="flex flex-col gap-5 mt-5">
                <h2 className="self-center rounded-xl border-2 p-1 border-david-theme/90 text-david-theme/70 font-bold text-xl">Informacion del cliente</h2>
                <div className="flex flex-col gap-5">
                    <section  className="flex flex-col self-center">
                        <label className="font-bold text-david-theme/90" >Nombre:</label>
                        <div>
                            <UserIcon className="absolute mt-[6px] w-6 h-6 text-david-theme/90 "/>
                            <input
                            onChange={handleName}
                            value={name}
                            name="name"
                            className="font-medium w-48 pl-6 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 focus:outline-blue-500" type="text"/>
                       </div>
                    </section>
                    <section  className="flex flex-col self-center">
                        <label className="font-bold text-david-theme/90" >Apellido:</label>
                       <div>
                            <UserIcon className="absolute mt-[6px] w-6 h-6 text-david-theme/90 "/>
                            <input
                            onChange={handleSurname}
                            value={surname}
                            name="surname"
                            className="font-medium w-48 pl-6 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 focus:outline-blue-500" type="text"/>                        
                       </div>
                    </section>
                    <section className="flex flex-col self-center">
                        <label className="font-bold text-david-theme/90">Numero de Celular:</label>
                        <div>
                            <PhoneIcon className="absolute pl-[2px] mt-[6px] w-6 h-6 text-david-theme/90 "/>
                            <input
                            onChange={handlePhone}
                            name="phone"
                            value={phone}
                            className="font-medium w-48 pl-6 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 focus:outline-blue-500"
                            type="text"
                            />
                        </div>
                    </section>
                </div>
        </form>
    )
}