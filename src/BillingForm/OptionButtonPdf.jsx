import { useContext } from "react"
import { PDFDownloadLink } from '@react-pdf/renderer'
import { billingContext } from "../context/BillingContext"
import { BillingPDF } from '../BillingPdf/BillingPDF'



export const OptionButtonPdf = ()=>{
    const { setViewPDF, data } = useContext(billingContext)
    return (
        <div className="flex gap-2 self-center mt-5">
            <button
            onClick={()=>setViewPDF(true)}
            className="bg-david-theme/60 text-white p-1 rounded-xl h-10 w-52 focus:scale-[1.02] focus:bg-black/75">Previsualizar PDF</button>
            <PDFDownloadLink document={<BillingPDF information={data} />} fileName={`${new Date()}`}>
            <button 
            className="bg-david-theme/60 text-white p-1 rounded-xl h-10 w-52 focus:scale-[1.02] focus:bg-black/75">Descargar PDF </button>
            </PDFDownloadLink>
        </div>
    )
}