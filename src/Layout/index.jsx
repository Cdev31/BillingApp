import { useContext } from "react"
import { billingContext } from "../context/BillingContext"



export const Layout = ({children})=>{
   const { page, setNextPage, activeButton, viewPDF} = useContext( billingContext )

   const onNextPage = ()=>{
      const nextPage = page + 1
      if( activeButton === true ){
        setNextPage(nextPage)
      }
   }

   const onBeforePage = ()=>{
    const nextPage = page - 1
     if(nextPage === 0)return
     setNextPage(nextPage)
  }
    return (
        <section className="flex flex-col w-full justify-center">
          <figure className="bg-david-theme/60 w-full h-[9rem] flex justify-center">
            <img className="w-[10rem] h-[9.5rem]" src="public/Davids_logo.png"/>
          </figure>
          {children}
          {
           viewPDF === false ? (
            <>
            <div className="self-center flex flex-row gap-2">
            <button 
              onClick={onBeforePage}
              className="mt-5 border-2 rounded-xl bg-david-theme/70 text-theme-70 
              self-center p-1 w-28 h-[3rem] font-bold text-white">
              Atras
            </button>
            <button 
              disabled={!activeButton}
              onClick={onNextPage}
              className={`${ activeButton == false ? "bg-black/60": " bg-david-theme/70"} mt-5 border-2 rounded-xl text-theme-70 
              self-center p-1 w-28 h-[3rem] font-bold text-white`}>
              Continuar
            </button>
            </div>
            <footer className="bg-david-theme/60 h-10"></footer>
            </>
           ): <></>
          }
        </section>
    )
}