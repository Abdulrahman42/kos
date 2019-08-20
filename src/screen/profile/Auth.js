import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native' 
import { Appbar, Button} from 'react-native-paper'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default class Login extends Component {
  static navigationOptions = {
    header: null,
    };
    render() {
        return (
            <View style={styles.container}>
      <View >
        <View>
        <EvilIcons name="share-google"  size={80}/>
        </View>
      <Button style={styles.button}  mode="contained" onPress={()=>{
                      this.props.navigation.navigate('Register')}}> Daftar
        </Button>          
        <Text style={styles.text}>
          Kamu belum masuk nih, yuk masuk untuk menikmati 
        </Text>
        <Text>
        fitur kosku lebih banyak
        </Text>
      <Button style={styles.button}  mode="contained" onPress={()=>{
                            this.props.navigation.navigate('Login')}}> Masuk
      </Button>          
      </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
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