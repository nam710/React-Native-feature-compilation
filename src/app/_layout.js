import { Stack } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";

import { useEffect } from "react";

import * as SplashScreen from 'expo-splash-screen';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {AmaticSC_400Regular,AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc'

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [fontsLoaded,fontError] = useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold:AmaticSC_700Bold,
      })
    
      useEffect(()=>{
        if(fontsLoaded || !fontError){
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded,fontError])
    
      if(!fontsLoaded && !fontError){
        return null;
      }

    return (
    <Stack screenOptions={{}}>
        <Stack.Screen name="index" options={{title:"DEVember"}}/>
    </Stack>
    )
    
}