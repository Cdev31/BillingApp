
import { Document, Page, View, Text, Image } from '@react-pdf/renderer'
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
            height: '100px'
          }}>
            <Image style={{width: '130px', height: '220px',paddingTop: '15px', marginLeft: '20px'}} src="/public/Davids_logo.png"/>
          </View>
          

        <View style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '30px'
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
        <View style={{alignSelf: 'center'}}>
           <Text 
           style={{color: 'black', fontSize: '20px'}} 
           >Thanks for your preference!!</Text>
           <Text 
           style={{fontSize:'14px', color: 'black', marginLeft: '30px'}}
           >It was a pleasure to serve you.</Text>
           <Text 
           style={{fontSize:'14px', color: 'black', marginLeft: '70px'}}
           >Date: {dateNow.toLocaleDateString()}</Text>
        </View>
        </Page>
    </Document>
    )
}