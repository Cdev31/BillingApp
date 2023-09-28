import { View, Text } from "@react-pdf/renderer"



export const AddressBilling = () => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            fontSize: '14px',
            marginTop: '50px',
        }}>
            <Text style={{  
            fontSize: '16px',
            marginLeft: '55px',
            marginRight: '40px',
            borderBottomWidth: '1px', borderColor: 'black', opacity: 0.9 }}>Address information</Text>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '55px',
                marginRight: '40px'
            }}>

            <View style={{
                display: 'flex',
                gap: '5px'
            }}>
                <Text style={{
                    fontSize: '15px'
                }}>From:</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px'
                }}>
                    <Text>Address:</Text>
                    <Text style={{
                        width: '180px'
                    }}>8565 W sam houston pwy apt. 608</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px'
                }}>
                    <Text>City:</Text>
                    <Text > houston tx 77072</Text>
                </View>
            </View>

            <View style={{
                display: 'flex',
                gap: '5px'
            }}>
                <Text style={{
                    fontSize: '15px'
                }}>To:</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px'
                }}>
                    <Text>Address:</Text>
                    <Text style={{
                        width: '180px'
                    }}>8565 W sam houston pwy apt. 608</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px'
                }}>
                    <Text>City:</Text>
                    <Text> houston tx 77072</Text>
                </View>
            </View>
            </View>
        </View>
    )
}