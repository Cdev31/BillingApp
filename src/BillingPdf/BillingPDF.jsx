
import { Document, Page, View, Text, Image } from '@react-pdf/renderer'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { InformationPDF } from './InformationPDF'
import { AddressBilling } from './AddressBilling'
import { UserBilling } from './UserBilling'
import { IconBilling } from './IconBilling'

export const BillingPDF = ({information})=>{ 

  const date = new Date()
  const dateNow = new Date(date.getFullYear(),date.getMonth(), date.getDate())

  const userInformation ={
      completedName: information.name + " " + information.surname,
      phone: information.phone
  }

  const hours =  parseInt(information.workingHours) + parseInt(information.extraHours) 
  const totalPrice = parseInt(information.basePrice) + ( parseInt(information.extraPrice) * parseInt(information.extraHours))
  const movingInformation = {
      totalHours: hours,
      extraHours:parseInt(information.extraHours),
      basePrice: parseInt(information.basePrice),
      extraPrice: parseInt(information.extraPrice),
      description: information.description,
      total: totalPrice
  }

  return(
    <Document>
        <Page size="A4">
          <View style={{
            backgroundColor: 'rgb(0 0 255 / 0.8)',
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Image style={{width: '190px', height: '180px',paddingTop: '15px'}} src="/public/Davids_logo.png"/>
          </View>
          

        <View style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '10px'
        }}>
          <UserBilling
            data={userInformation}
          />  
          <AddressBilling
          dataFrom={information.from}
          dataTo={information.to}
          />
          <InformationPDF 
           dataMoving={movingInformation}
          />
        </View>

        <IconBilling/>
        <View>
           <Text 
           style={{color: 'black', fontSize: '20px', marginLeft: '155px'}} 
           >Thanks for your preference!!</Text>
           <Text 
           style={{fontSize:'14px', color: 'black', marginLeft: '190px'}}
           >It was a pleasure to serve you.</Text>
           <Text 
           style={{fontSize:'14px', color: 'black', marginLeft: '230px'}}
           >Date: {dateNow.toLocaleDateString()}</Text>
        </View>
        </Page>
    </Document>
    )
}