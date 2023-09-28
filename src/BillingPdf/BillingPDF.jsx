
import { Document, Page, View, Text, Image } from '@react-pdf/renderer'

import { InformationPDF } from './InformationPDF'
import { AddressBilling } from './AddressBilling'
import { UserBilling } from './UserBilling'

export const BillingPDF = ()=>{ 
  return(
    <Document>
        <Page size="A4">
          <View style={{
            backgroundColor: 'rgb(0 0 255 / 0.6)'
          }}>
            <Image style={{width: '160px', height: '150px'}} src="/public/Davids_logo.png"/>
          </View>

        <View style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <UserBilling/>  
          <AddressBilling/>
          <InformationPDF qty={qty} />
        </View>
        </Page>
    </Document>
    )
}