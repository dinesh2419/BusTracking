import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { useState } from 'react';
async function opendb()
{
    if(!(await FileSystem.getInfoAsync(FileSystem.documentDirectory+"SQLite")).exists){
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+"SQLite");
    }
    await FileSystem.downloadAsync(
      Asset.fromModule(require("../assets/database/sqlite.db")).uri,
      FileSystem.documentDirectory+"SQLite/sqlite.db"
    );
    return SQLite.openDatabase("sqlite.db");
}

export default function UserResgistration({navigation}) {
  const [statement,statementhandle]=useState("");
  const [userid,setuserid]=useState('');
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [phonono,setphoneno]=useState('');
  const [password,setpassword]=useState('');
  function signup()
  {
    if(userid==""||name==""||email==""|| phonono==""||password=="" )
    {
      statementhandle("all fields are required ")
    }
    else if(password.length<4)
    {
      statementhandle("password should be more than 4 digits");
    }
    else{
     // userinsert();
    }
    
    navigation.navigate('Login')
  }
  async function userinsert()
    {
    opendb().then(db=>
      db.transaction((tx)=>{
        tx.executeSql(
          "insert into user(user_id,user_name,password,email,phoneno) values(?,?,?,?,?) ",
          [userid,name,password,email],
          (tx,res)=>{
            console.log(res)
            navigation.navigate('Login')
          },
          error=>{
            console.log("oops! there was an error "+error);
          }
        )
      })) 
    return true;
    }
  return (
    <View style={styles.appcontainer}>
    <Text style={styles.heading} >Bus Tracking</Text>
      <StatusBar barStyle = "dark-content" hidden={true} />
      
      <TextInput style={styles.inputboxstyle} placeholder='user id' onChangeText={(x)=>{
        setuserid(x)
      }}></TextInput>
      <TextInput style={styles.inputboxstyle} placeholder='name' onChangeText={(x)=>{
        setname(x)
      }}></TextInput>
      <TextInput style={styles.inputboxstyle} placeholder='email' onChangeText={(x)=>{
        setemail(x)
      }}></TextInput>
      <TextInput style={styles.inputboxstyle} placeholder='phone number' onChangeText={(x)=>{
        setphoneno(x)
      }}></TextInput>
      
      <TextInput style={styles.inputboxstyle} secureTextEntry={true}  placeholder='Password' onChangeText={(x)=>{
        setpassword(x)
      }}></TextInput>
      <Button title='submit' onPress={()=>{
            //navigation.navigate('Login')
            signup()
      }}></Button>
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
