import { Text, View } from "@react-pdf/renderer"



export const UserBilling = ()=>{

    return(
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '14px',
            gap: '5px',
            marginTop: '80px',
            marginLeft: '55px',
            marginRight: '40px'
        }}>
            <Text style={{  
            fontSize: '17px',
            fontWeight:'extrabold',
            borderBottomWidth: '1px', borderColor: 'black', opacity: 0.9 }} >Costumer Information</Text>
           
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px',
                }}>
                    <Text>Name:</Text>
                    <Text>Juan Carlos Norte Usa</Text>
                </View>
                
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px',
                }}>
                    <Text>Phone:</Text>
                    <Text>+1 (832) 789-8901</Text>
                </View>

        </View>
    )
}