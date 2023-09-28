import { useForm } from "../hooks/useForm"


export const AddressForm = ()=>{
    const { onInputChange } = useForm([], 4)
    
    const addressInformation = ['Desde', 'Hasta']
    return (
        <form className="flex flex-col gap-5 mt-5">
            <h2 className="m-1 self-center rounded-xl border-2 p-1 border-david-theme/90 text-david-theme/70 font-bold text-xl">Informacion de lugar de la mudanza</h2>
            {
                addressInformation.map((information)=>(
                    <>
                    <h2 className="self-center font-bold text-xl text-david-theme/70">{information}</h2>
                    <div className="flex flex-wrap gap-3 justify-center mt-5">
                    <section className="flex flex-col self-center">
                            <label className="font-bold text-david-theme/90 self-center">Ciudad:</label>
                            <input
                            onBlur={onInputChange}
                            name="Ciudad"
                            className="font-medium w-48 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="text"/>
                        </section>
                        <section className="flex flex-col self-center">
                            <label className="font-bold text-david-theme/90 self-center">Direccion:</label>
                            <input
                            onBlur={onInputChange}
                            name="Direccion"
                            className="font-medium w-48 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="text"/>
                        </section>
                    </div> 
                    </>
                ))
            }
        </form>
    )
}