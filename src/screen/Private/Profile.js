import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends Component {
  logout= async ()=>{
    try{
      await AsyncStorage.clear()
      this.props.navigation.navigate('PublicNavigator')
    }catch(e){}
  }
  render() {
    return (
      <View>
      <Button onPress={this.logout}>
        <Text>Keluar</Text>
      </Button>
      </View>
    )
  }
}
