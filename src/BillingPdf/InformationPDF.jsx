

import { View, Text } from '@react-pdf/renderer'

export const InformationPDF =({ qty = [] })=>{
   

    return (
        <View style={{ display: 'flex', flexDirection: 'row',  alignSelf: 'center', margin: '50px' }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <View style={{
                    display: 'flex',
                    gap: '5px',
                    padding: '4px',
                    width: '200px',
                    fontSize: '14px'
                }}>
                    <Text style={{
                        padding:'4px',
                        borderColor: 'black',
                        borderBottomWidth: '2px',
                        opacity: 0.9
                    }}>Description:</Text>
                    <Text style={{
                        padding: '4px',
                        fontSize: '14px'
                    }}>Labor 5 hours at $55/hr</Text>
                </View>
                <View style={{
                    display: 'flex',
                    padding: '4px',
                    fontSize: '14px'
                }}>
                    <Text style={{
                        padding:'4px',
                        borderColor: 'black',
                        borderBottomWidth: '2px',
                        opacity: 0.9
                    }}> QTY </Text>
                    {
                        qty.map((qty)=>(
                            <Text
                            style={{
                                padding: '4px',
                                alignSelf: 'center'
                            }}
                            >{qty}</Text>
                        ))
                    }
                </View>
                <View style={{
                    display: 'flex',
                    padding: '4px',
                    fontSize: '14px'
                }}>
                    <Text style={{
                        padding:'4px',
                        borderColor: 'black',
                        borderBottomWidth: '2px',
                        opacity: 0.9
                    }}>Unit Price</Text>

                    <Text style={{
                        alignSelf: 'center',
                        padding: '4px'
                    }}>150.00</Text>
                    <Text style={{
                        alignSelf: 'center',
                        padding: '4px'
                    }}>55.00</Text>
                </View>

                <View style={{
                    display: 'flex',
                    padding: '4px',
                    fontSize: '14px'
                }}>
                    <Text style={{
                        padding:'4px',
                        borderColor: 'black',
                        borderBottomWidth: '2px',
                        opacity: 0.9
                    }}>Amount</Text>
                    <Text style={{
                        alignSelf: 'center',
                        padding: '4px'
                    }}>150.00</Text>
                    <Text style={{
                        alignSelf: 'center',
                        padding: '4px'
                    }}>275.00</Text>
                </View>
            </View>
            <View style={{
                alignSelf: 'flex-end'
            }}>
                <Text style={{
                    fontSize: '15px'
                }}> Total: $425.00</Text>
            </View>
        </View>
    )
}