import { Card } from '@rneui/themed';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function Cardinfo({route,navigation})
{
    const {arr}=route.params;
    console.log(arr+" in cards sectionr");
    return (
    arr.map((x)=>{
    return (
        <View style={styles.container} >
        <Card containerStyle={{width:"100%"}}>
            <Card.Title style={styles.textstyle1}>service number: {x[0]}</Card.Title>
            <Card.Divider></Card.Divider>
            <Text style={styles.textstyle}>
            <Text>{x[4]}{"\t"}{x[2]}</Text>
            <Text >{"\n"}{x[5]}{"\t"}{x[3]}</Text>
            </Text>
            <Text style={styles.textstyle}>current location:{null}</Text>
        </Card>
    </View> 
    );
    })
);   
    
}
export default Cardinfo;
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    textstyle:{
        fontSize:20,
        
    },
    textstyle1:{
        fontSize:20,
        color:"red"
    }

})