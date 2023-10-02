

import { View, Text } from '@react-pdf/renderer'

export const InformationPDF =({dataMoving})=>{
   const qty = [1,dataMoving.extraHours]

    return (
        <View style={{ display: 'flex', flexDirection: 'column', marginLeft: '50px', marginRight:'50px', marginTop:'40px', marginBottom: '45px' }}>
            <Text style={{  
            fontSize: '18px',
            fontWeight:'extrabold',
            borderBottomWidth: '1px', borderColor: 'black', marginBottom: '5px' }} >Moving Information</Text>
           
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
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
                        fontSize:'16px'
                    }}>Description</Text>
                    <Text style={{
                        padding: '4px',
                        fontSize: '14px'
                    }}>{dataMoving.description}</Text>
                </View>
                <View style={{
                    display: 'flex',
                    padding: '4px',
                    fontSize: '14px'
                }}>
                    <Text style={{
                        padding:'4px',
                        fontSize:'16px'
                    }}> QTY </Text>
                    {
                        qty.map((qty,i)=>(
                            <Text
                            key={i}
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
                        fontSize:'16px'
                    }}>Unit Price</Text>

                    <Text style={{
                        alignSelf: 'center',
                        padding: '4px'
                    }}>{`$${dataMoving.basePrice}`}</Text>
                    <Text style={{
                        alignSelf: 'center',
                        padding: '4px'
                    }}>{`$${dataMoving.extraPrice}`}</Text>
                </View>

                <View style={{
                    display: 'flex',
                    padding: '4px',
                    fontSize: '14px'
                }}>
                    <Text style={{
                        padding:'4px',
                        fontSize:'16px',
                        paddingLeft: '10px'
                    }}>Amount</Text>
                    <Text style={{
                        alignSelf: 'center',
                        padding: '4px'
                    }}>{`$${dataMoving.basePrice}`}</Text>
                    <Text style={{
                        alignSelf: 'center',
                        padding: '4px'
                    }}>{`$${dataMoving.extraPrice * dataMoving.extraHours}`}</Text>
                    <Text style={{
                    fontSize: '16px',
                    marginTop: '10px'
                    }}> Total: {`$${dataMoving.total}`}</Text>
                </View>
            </View>
        </View>
    )
}