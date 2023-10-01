import { Image, View, Text } from '@react-pdf/renderer'

export const IconBilling = ()=>{
    return(
        <View style={{display:'flex',alignSelf:'center',flexDirection: 'row',padding: '2px', fontSize: '12px', gap:'3px', marginBottom:'30px'}}>
               
              <View style={{
                display: 'flex',
                gap:'2px'
              }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '3px',
                    paddingLeft: '2px'
                }}>
                    <Image style={{width: '14px', height: '14px'}} src="/public/place.png"/>
                    <Text style={{ alignSelf: 'flex-end'}} >Houston Texas</Text>
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '3px',
                    paddingLeft: '2px'
                }}>
                    <Image style={{width: '14px', height: '14px'}} src="/public/phone.png"/>
                    <Text  style={{alignSelf: 'flex-end'}}>+1 (346) 755-3216</Text>
                </View> 
                <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '3px',
                paddingLeft: '2px'
               }}>
                  <Image style={{width: '14px', height: '14px'}} src="/public/phone.png"/>
                  <Text  style={{alignSelf: 'flex-end'}}>+1 (832) 474-5848</Text>
               </View> 
              </View>

              <View style={{
                marginLeft: '50px',
                display: 'flex',
                gap:'2px',
                paddingTop: '10px'
              }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '3px',
                    paddingLeft: '2px'
                }}>
                    <Image style={{width: '14px', height: '14px'}} src="/public/Facebook.png"/>
                    <Text  style={{alignSelf: 'flex-end'}}>David's Movers Service</Text>
                </View>   

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '3px',
                    paddingLeft: '2px'
                }}>
                    <Image style={{width: '14px', height: '14px'}} src="/public/Email.png"/>
                    <Text  style={{alignSelf: 'flex-end'}}>Davidmoverstx@gmail.com</Text>
                </View>  
              </View>
            </View>
    )
}