import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function UserResgistration({navigation}) {
  return (
  
    <View style={styles.appcontainer}>
    <Text style={styles.heading} >Bus Tracking</Text>
      <StatusBar barStyle = "dark-content" hidden={true} />
      
      <TextInput style={styles.inputboxstyle} placeholder='name'></TextInput>
      <TextInput style={styles.inputboxstyle} placeholder='email'></TextInput>
      <TextInput style={styles.inputboxstyle} placeholder='phone number'></TextInput>
      
      <TextInput style={styles.inputboxstyle} hidden={true} placeholder='Password'></TextInput>
      <Button title='submit' onPress={()=>{
            navigation.navigate('Login')
            
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
