import { Card } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


function Cardinfo()
{
    return (
    <View style={styles.container} >
        <Card containerStyle={{width:"100%"}}>
            <Card.Title>1234</Card.Title>
            
            <Text >sample card</Text>
            <Text></Text>
        </Card>
    </View>   ); 
}
export default Cardinfo;
const styles=StyleSheet.create({
    container:{
        
        alignItems:'center',
        justifyContent:'center'
    }
})