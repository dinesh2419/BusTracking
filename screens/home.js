import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

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

export default function Home({navigation}) {
  const [from_loc,set_from_loc]=useState("");
  const [to_loc,set_to_loc]=useState("");
  function from_loc_handle(x)
  {
    set_from_loc(x);
    //console.log(x);
  }
  function to_loc_handle(x)
  {
    set_to_loc(x);
    //console.log(x);
  }
  let arr=[];
  function gather_info()
  {
    opendb().then(db=>
      db.transaction((tx)=>{
        tx.executeSql(
          "SELECT * FROM bus WHERE from_loc=? AND to_loc=?",[from_loc,to_loc],
          (tx,res)=>{
             console.log("success");
            let results=[]
            for(let i=0;i<res.rows.length;i++)
            {
                let row=res.rows.item(i);
                let k=[row.bus_id,row.bus_name,row.start_time,row.end_time,row.from_loc,row.to_loc];
                results.push(k);
            }
            arr=results;
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
      <StatusBar barStyle = "dark-content" hidden={true} />
       <Text style={styles.heading} >Bus Tracking</Text>
      <TextInput style={styles.inputboxstyle} placeholder='From Location' onChangeText={from_loc_handle}></TextInput>
      <TextInput style={styles.inputboxstyle} placeholder='To Location' onChangeText={to_loc_handle}></TextInput>
      <Button title='search' onPress={()=>{
        gather_info();
        navigation.navigate('search_box',{
          arr:arr});
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
