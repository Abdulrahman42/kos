import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Appbar, Button} from 'react-native-paper';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <Appbar.Header style={styles.header}>
  
        <Appbar.Content
          title="Login"
        />
      </Appbar.Header>
      <View style={styles.body}>
        <Text style={styles.text}>
          Kamu belum login nih, yuk login untuk menikmati 
        </Text>
        <Text>
        fitur mamikos lebih banyak
        </Text>
      <Button style={styles.button}  mode="contained" onPress={() => console.log('Pressed')}>
   Login
  </Button>          
      </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    backgroundColor:'white'
  },
    body: {
        
        paddingHorizontal:20,
        justifyContent:"center",
        alignItems:"center",
    }, 
      text:{
        justifyContent:"center",
        alignItems:"center"
      
    }, title: {
        fontWeight: 'bold',
        color: "#00b16a"
    }, textHeader: {
        width: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    }, button: {
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal:20,
        fontSize: 13,
        backgroundColor: '#F95516'
    }

})