import { PDFViewer } from '@react-pdf/renderer'
import { useState } from 'react'
import { BillingPDF } from './BillingPDF'
import { UserInfoForm } from './BillingForm/UserInfoForm'
import { AddressBilling } from './AddressBilling'
import { AddressForm } from './BillingForm/AddressForm'
import { MovingForm } from './BillingForm/MovingForm'
import { BillingForm } from './BillingForm'


export const BillingApp = ()=> {

  const [viewPDF,setViewPDF] = useState(false)
  const [information,setInformation] = useState({})
  const [qty, setQty] = useState([1,5])
  const [ nextPage, setNextPage ] = useState(1)

  const onQty = (num)=>{
    setQty(num)
  }

  return (
    <div>
     {
      viewPDF === false ?  
      <BillingForm positionPage={nextPage}/>
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

