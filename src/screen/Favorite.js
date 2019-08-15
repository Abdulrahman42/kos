import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Appbar} from 'react-native-paper';

export default class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
         <Appbar.Header style={styles.header}>
  
  <Appbar.Content
    title="Login"
  />
</Appbar.Header>
      </View>
    );
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
          alignItems:"flex-end",
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