import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer:{
      flexDirection: 'column',
      justifyContent: "center",
      alignSelf: 'center',
      alignItems: 'center',
      width: '100%',
      marginBottom: 60,
      paddingTop:20,
      paddingBottom: 10,
      backgroundColor: '#4d4d4d'
    },
    inputerContainer:{
      width: '80%',
      flexDirection: 'column',
      alignItems: 'center',
    }
  });
  
  export default styles;