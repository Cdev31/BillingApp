import { PDFViewer } from '@react-pdf/renderer'
import { useState } from 'react'
import { BillingPDF } from './BillingPdf/BillingPDF'
import { UserInfoForm } from './BillingForm/UserInfoForm'
import { AddressBilling } from './BillingPdf/AddressBilling'
import { AddressForm } from './BillingForm/AddressForm'
import { MovingForm } from './BillingForm/MovingForm'
import { BillingForm } from './BillingForm'


export const BillingApp = ()=> {

  const [viewPDF,setViewPDF] = useState(false)
  const [information,setInformation] = useState({})
  const [qty, setQty] = useState([1,5])
  
  const onQty = (num)=>{
    setQty(num)
  }

  return (
    <div>
     {
      viewPDF === false ?  
      <BillingForm />
      : 
      <PDFViewer style={{
        width: '100%',
        height: '100vh'
      }}>
        <BillingPDF qty={qty} data={information}/>
      </PDFViewer>
     }
    
    </div>
  )
}

