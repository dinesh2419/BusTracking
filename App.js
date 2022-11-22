import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Login from './screens/login';
import Home from './screens/home';
import Cardinfo from './screens/bus_info';
import UserResgistration from './screens/register';
const Stack=createNativeStackNavigator();
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import Bus_info2 from './screens/bus_info2';
async function opendb()
{
  if(!(await FileSystem.getInfoAsync(FileSystem.documentDirectory+"SQLite")).exists){
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+"SQLite");
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(require("./assets/database/sqlite.db")).uri,
    FileSystem.documentDirectory+"SQLite/sqlite.db"
  );
  return SQLite.openDatabase("sqlite.db");
}
function App() {
  
useEffect(()=>{
  // const d=new Date();
  // console.log(d);
  // console.log(d.getHours());
  // console.log(d.getMinutes());
  opendb().then(db=>
    db.transaction((tx)=>{
      tx.executeSql(
        "SELECT * FROM bus",[],
        (tx,res)=>{
          console.log("sucess");
          console.log(res.rows);
        },
        error=>{
          console.log("oops! there was an error "+error);
        }
      )
    }))
},[]);
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
      name="bus_info"
      component={Cardinfo}
    />
    <Stack.Screen
      name="bus_info2"
      component={Bus_info2}
    />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;

