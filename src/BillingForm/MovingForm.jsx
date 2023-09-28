export const MovingForm = ()=>{

    return (
        <form className="flex flex-col gap-5 mt-5 p-2">
           <h2 className="self-center rounded-xl border-2 p-1 border-david-theme/90 text-david-theme/70 font-bold text-xl">Informacion de la mudanza</h2>
           <div className="self-center flex flex-row gap-5">
           <section className="flex flex-col gap-2">
                <label className="font-bold self-center text-david-theme/90" >Horas laboradas:</label>
                <input
                min={0}
                name="Client"
                className="text-center font-medium self-center w-14 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="number"/>
            </section>
            <section className="flex flex-col gap-2">
                <label className="font-bold self-center text-david-theme/90" >Precio unitario:</label>
                <input
                min={0}
                name="Client"
                className="text-center font-medium self-center w-14 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="number"/>
            </section>
           </div>
           <section className="flex flex-col gap-2">
                <label className="font-bold self-center text-david-theme/90" >Descuento:</label>
                <input
                min={0}
                name="Client"
                className="text-center font-medium self-center w-14 text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="number"/>
            </section>
            <div className="self-center flex flex-row gap-5">
           <section className="flex flex-col gap-2">
                <label className="font-bold self-center text-david-theme/90" >QTY:</label>
                <input
                min={0}
                name="Client"
                className="text-center font-medium self-center w-[5rem] text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="number"/>
            </section>
            <section className="flex flex-col gap-2">
                <label className="font-bold self-center text-david-theme/90" >Total:</label>
                <input
                min={0}
                name="Client"
                className="text-center font-medium self-center w-[5rem] text-black/80 border-2 rounded-lg p-1 border-david-theme/70 pl-2 focus:outline-blue-500" type="number" readOnly/>
            </section>
           </div>
         </form>
    )
}