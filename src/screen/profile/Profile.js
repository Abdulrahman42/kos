import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import {Card} from 'react-native-paper'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ScrollView>
        <View style={styles.color}>
          <View>
        <Card style={styles.container}>
            <Card.Content style={{paddingHorizontal:0, paddingVertical:0}}>
              <View style={{flexDirection:'row'}}>
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
        </View>
        <View>
        <Card style={styles.container2}>
            <Card.Content style={{paddingHorizontal:0, paddingVertical:0}}>
              <View style={{flexDirection:'row'}}>
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
        <View>
        <Card style={styles.container2}>
            <Card.Content style={{paddingHorizontal:0, paddingVertical:0}}>
              <View style={{flexDirection:'row'}}>
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
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
  container:{
      marginHorizontal: 15,
    marginTop:50,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  header:{
    backgroundColor: '#1BAA56'
  },
  container2:{
      marginHorizontal: 15,
    marginTop:10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  color:{
    width: 200, 
        height: 150, 
        borderTopLeftRadius: 35, 
        borderTopRightRadius: 35,
        overflow: "hidden",
        backgroundColor:'red'
  }
})