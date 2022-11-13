import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Home({navigation}) {
  return (
  
    <View style={styles.appcontainer}>
      <StatusBar barStyle = "dark-content" hidden={true} />
       <Text style={styles.heading} >Bus Tracking</Text>
      <TextInput style={styles.inputboxstyle} placeholder='From Location'></TextInput>
      <TextInput style={styles.inputboxstyle} placeholder='To Location'></TextInput>
      <Button title='search' onPress={()=>{
        navigation.navigate('search_box');
      }}></Button>
      <Text style={{marginTop:50}}></Text>
      <TextInput style={styles.inputboxstyle} keyboardType='number-pad' placeholder='Service Number'></TextInput> 
      <Button title='track'></Button> 
    </View>
  );
}

const styles = StyleSheet.create({
  
  heading:
  {
    fontSize:50,
    color:"#0044ff",
    marginBottom:50,
    position:"relative",
    backgroundColor:"#C0C0C0",
    width:"100%",
    paddingLeft:50
  },
  appcontainer:{
    
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputboxstyle:
  {
    paddingLeft:10,
    fontSize:30,
    height:50,
    width:280,
    borderColor:"black",
    borderWidth:4,
    borderRadius:6,
    margin:2
  }
});
