import { Text, View } from "@react-pdf/renderer"


export const UserBilling = ({data})=>{
    
    return(
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '14px',
            gap: '5px',
            marginTop: '20px',
            marginLeft: '55px',
            marginRight: '40px',
            marginBottom: '50px'
        }}>
            <Text style={{  
            fontSize: '18px',
            fontWeight:'extrabold',
            borderBottomWidth: '1px', borderColor: 'black' }} >Costumer Information</Text>
           
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px',
                    marginTop: '10px'
                }}>
                    <Text>Name:</Text>
                    <Text>{data.completedName}</Text>
                </View>
                
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px',
                }}>
                    <Text>Phone:</Text>
                    <Text>{data.phone}</Text>
                </View>

        </View>
    )
}