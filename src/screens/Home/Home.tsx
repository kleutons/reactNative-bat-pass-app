import React from "react"
import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import styles from "../Home/Style"
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home(){
    return(
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo/>
      </View>

      <View style={styles.inputerContainer}>
        <BatButton />
      </View>
      
      <StatusBar style="light" />
    </View>     
    )
}