import { PDFViewer } from '@react-pdf/renderer'
import { useContext } from 'react'
import { BillingPDF } from './BillingPdf/BillingPDF'
import { BillingForm } from './BillingForm'
import { billingContext } from './context/BillingContext'


export const BillingApp = ()=> {
  const { viewPDF, data  } = useContext(billingContext)

  const dat = {
    name: 'kalet',
    surname: 'chavez'
  }
  return (
    <div className='h-[24rem]'>
     {
      viewPDF === false ?  
      <BillingForm />
      : 
      <PDFViewer style={{
        width: '100%',
        height: '100vh'
      }}>
        <BillingPDF information={data} />
      </PDFViewer>
     }
    
    </div>
  )
}

