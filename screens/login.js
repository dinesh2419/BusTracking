import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import {  StyleSheet, Text, TextInput, View} from 'react-native';
import { Button } from '@rneui/themed';

export default function Login({navigation}) {
  return (
  
    <View style={styles.appcontainer}>
    <Text style={styles.heading} >Bus Tracking</Text>
      <StatusBar barStyle = "dark-content" hidden={true} />
      <TextInput style={styles.inputboxstyle} placeholder='User Id'></TextInput>
      <TextInput style={styles.inputboxstyle} hidden={true} placeholder='Password'></TextInput>
      <Button title='login' containerStyle={styles.buttonstyle} onPress={()=>{
        navigation.replace('Home');
        //navigation.navigate('Home');
        
      }}/>  
      <Button title='sign up' containerStyle={styles.buttonstyle} onPress={()=>{
        navigation.navigate('Register');
      }}/>
      
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
    width:"100%",
    borderColor:"black",
    borderWidth:4,
    borderRadius:6,
    margin:2
  },
  buttonstyle:{
    width:"80%",
    marginBottom:10,
    borderRadius:100,
    backgroundColor:"blue"
  }
});
