import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Appbar } from 'react-native-paper';

export default class Bookinglist extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
      header:null
  };

  render() {
    return (
      <View >
        <View>
        <Appbar.Header style={styles.header}>
        <Appbar.BackAction
          onPress={()=>{ this.props.navigation.navigate('HomeScreen')}}
        />
        <Appbar.Content
          title="Booking List"
        />
      </Appbar.Header>
        </View>
          <Card style={styles.container}>
            <Card.Content style={{paddingHorizontal:0, paddingVertical:0}}>
              <View style={{flexDirection:'row'}}>
                <View>
                  <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                    style={{width: 100, height: 120}} />
                </View>
                <View style={{flex:1, marginHorizontal:5}}>
                  <View style={{marginVertical:10}}>
                    <Text style={{fontWeight:'bold', fontSize:15}}>Nama kos</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <View style={{marginRight:15}}>
                    <Text>Booking</Text>
                    <Text>Tanggal Booking</Text>
                  </View>
                  <View>
                        <Text>Durasi Sewa</Text>
                        <Text>1 bulan</Text>
                  </View>
                </View>
                  <View style={{marginTop:15}}>
                    <Text style={{fontSize:15, color:'#84CFD9'}}>
                      Tunggu Konfirmasi
                    </Text>
                  </View>
                </View>
             </View>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
  container:{
      marginHorizontal: 10,
    marginVertical:10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  header:{
    backgroundColor: '#2980b9'
  }
})