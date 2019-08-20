import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:''
    };
  }
  static navigationOption={
      header:null
  };

  render() {
    return (
      <View style={style.container}>
        <View style={{justifyContent:'center'}}>

        <TextInput
           label='Name'
           mode='outlined'
           secureTextEntry
           value={this.state.text}
           onChangeText={text => this.setState({ text })}
           />
           </View>
      <TextInput
        label='Email'
        mode='outlined'
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
      <TextInput
        label='Password'
        mode='outlined'
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Register
  </Button>

        <Text>Already have an account? Sign In</Text>
      </View>
    );
  }
}

const style= StyleSheet.create({
  container:{
    flex:1,
    // flexDirection:'row',
    // justifyContent:'center',
    alignContent:'center'
  }
})