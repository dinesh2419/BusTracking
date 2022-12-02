import React from 'react'
import { View,Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Livemap({route,navigation})
{
  const {serviceid}=route.params;
  
let arr=[
  'https://www.google.com/maps/@11.3163553,75.929602,15z/data=!3m1!4b1!4m5!7m4!1m2!1s117872037051904867442!2sChZxNklrRFVnQmNIeF9SZXRJandVNUxnEggHBe7Fr49wcA%3D%3D!2e2?hl=en',
  'https://www.google.com/maps/@11.3163949,75.9294624,15z/data=!3m1!4b1!4m5!7m4!1m2!1s107432298005165221900!2sChZLdEtNNFJPLUk1S1cwRWdDMGxUU1lREggHBe7FPmipQw%3D%3D!2e2?hl=en',
  'https://www.google.com/maps/@11.3165176,75.9294832,15z/data=!3m1!4b1!4m5!7m4!1m2!1s105819994209315989434!2sChZ3MU8xQ2RUYWYwVmlkeC1wbzY4SGxnEggHBe7FoJZyRQ%3D%3D!2e2?hl=en'
];
console.log(serviceid);
  return(
    <WebView
        source={{uri:arr[serviceid-1]}}
    />
  );
}