import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Login from './screens/login';
import Home from './screens/home';
import Cardinfo from './screens/bus_info';
import UserResgistration from './screens/register';
const Stack=createNativeStackNavigator();

function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown:false}}>
  
  <Stack.Screen
    name ="Login"
    component={Login}
    />
    <Stack.Screen
    name ="Register"
    component={UserResgistration}
    />
    <Stack.Screen
    name="Home"
    component={Home}
    />
    <Stack.Screen
      name="search_box"
      component={Cardinfo}
    />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;

//login page
function loginhandle()
{
  setsign(true);
}
/*{function Login({navigation}) {
  return (
  
    <View style={styles.appcontainer}>
    <Text style={styles.heading} >Bus Tracking</Text>
      <StatusBar barStyle = "dark-content" hidden={true} />
      <TextInput style={styles.inputboxstyle} placeholder='User Id'></TextInput>
      <TextInput style={styles.inputboxstyle} hidden={true} placeholder='Password'></TextInput>
      <Button title='login' onPress={loginhandle} ></Button>
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
}); } */