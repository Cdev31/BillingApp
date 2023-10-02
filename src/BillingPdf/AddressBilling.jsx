import { View, Text } from "@react-pdf/renderer"

export const AddressBilling = ({ dataFrom, dataTo }) => {
    
    function dividirTextoEnFragmentos(texto, longitud) {
        const fragmentos = [];
        for (let i = 0; i < texto.length; i += longitud) {
          fragmentos.push(texto.substring(i, i + longitud));
        }
        return fragmentos;
      }
      
      const fromAddress = dividirTextoEnFragmentos(dataFrom.address, 22);
      const toAddress = dividirTextoEnFragmentos(dataTo.address, 22);
      
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            fontSize: '14px',
            marginTop: '20px',
            marginBottom: '30px'
        }}>
            <Text style={{  
            fontSize: '18px',
            marginLeft: '55px',
            marginRight: '40px',
            borderBottomWidth: '1px', borderColor: 'black' }}>Address information</Text>
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
                    fontSize: '16px',
                    marginTop: '10px'
                }}>From:</Text>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px',
                    marginTop: '5px'
                }}>
                    <Text>Address:</Text>
                   <View style={{
                      display: 'flex',
                      flexDirection: 'column'
                   }}>
                   {fromAddress.map((linea,i)=>(
                        <Text key={i}>{linea}</Text>
                    ))}
                   </View>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5px',
                    gap: '5px'
                }}>
                    <Text>City:</Text>
                    <Text style={{marginLeft: '26px'}}> houston tx {dataFrom.postalCode}</Text>
                </View>
            </View>

            <View style={{
                display: 'flex',
                marginLeft: '20px',
                gap: '5px'
            }}>
                <Text style={{
                    fontSize: '16px',
                    marginTop: '10px'
                }}>To:</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '5px',
                    marginTop: '5px'
                }}>
                    <Text>Address:</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'column'
                   }}>
                   {toAddress.map((linea,i)=>(
                        <Text key={i}>{linea}</Text>
                    ))}
                   </View>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '5px',
                    gap: '5px'
                }}>
                    <Text>City:</Text>
                    <Text style={{marginLeft: '26px'}}> houston tx {dataTo.postalCode}</Text>
                </View>
            </View>
            </View>
        </View>
    )
}