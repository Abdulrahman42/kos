import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Asynstorage from '@react-native-community/async-storage'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      password:''
    };
  }
  static navigationOption={
      header:null
  };
  _handlername =(name)=>{
    this.setState({
      name: name
    })
  }
  _handleremail =(email)=>{
    this.setState({
      email: email
    })
  }
  _handlerpassword =(password)=>{
    this.setState({
      password: password
    })
  }
  _submithandler = async () => {
    try {
        //Fetch Data USERNAME dan PASSWORD API , LALU PENGECEKAN , JIKA MATCH BERI TOKEN
        let tempUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        await axios.post('https:skut-kost-api.herokuapp.com/api/v1/login', tempUser)
            .then((response) => {
                alert('Daftar Berhasil')
                this.props.navigation.navigate('PublicNav')
            })
            .catch((error) => {
                alert(error)
            });
    }
    catch (e) { }
}

  render() {
    return (
      <View style={style.container}>
        <View style={{justifyContent:'center'}}>
          <View style={{flex:1}}>
        <TextInput
           label='Name'
           mode='outlined'
           secureTextEntry
           value={this.state.name}
           theme={{
            colors: {
                primary:'green',
                underlineColor:'transparent',
              }
          }}
           onChangeText={this._handlername}
           />
          
      <TextInput
        label='Email'
        mode='outlined'
        keyboardType='email-address'
        value={this.state.email}
        theme={{
          colors: {
              primary:'green',
              underlineColor:'transparent',
            }
        }}
        onChangeText={this._handleremail}
      />
      <TextInput
        label='Password'
        mode='outlined'
        value={this.state.password}
        theme={{
          colors: {
              primary:'green',
              underlineColor:'transparent',
            }
        }}
        onChangeText={this._handlerpassword} 
      />
      </View>
          <View style={{flex:1}}>
          <Button style={{backgroundColor:'#F95516', marginTop:5}}mode="contained" onPress={this._submithandler}>
            Daftar
          </Button>
          </View>

          <View>

        <Text>Sudah mempunyai akun?{""}
        <Text style={{color:'#F95516'}}>
        Masuk di sini
          </Text> 
          </Text>
</View>
        </View>
        </View>
    
    );
  }
}

const style= StyleSheet.create({
  container:{
    flex:1,
    // flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:40
  }
})