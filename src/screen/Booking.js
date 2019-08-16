import React, { Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import { Appbar, Button, Checkbox } from 'react-native-paper'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default class Booking extends Component{
    state = {
        checked: false,
      };
      static navigationOptions = {
        header: null
      };
    
      render(){
        const { checked } = this.state;
        const isEnable  = checked == !false;
        const time = this.props.navigation.getParam('bookingDate', '')
          
        return(
        <View style={{flex:1}}>
            <Appbar.Header style={{backgroundColor:'#2980b9'}}>
                <Appbar.Content
                title='Booking'>
                </Appbar.Content>
            </Appbar.Header>
            <ScrollView>
            <View  style={style.container}>
                <View style={style.time}>
                    <View style={style.icon}>
                            <Text>Tanggal Masuk </Text>
                            <View style={{alignItems:'flex-end'}}>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('Calender')
                        }}>
                            <EvilIcons name="calendar"  size={18}>{time}</EvilIcons>
                        </TouchableOpacity>
                            </View>
                    </View>
                    <View style={style.icon}>
                            <Text>Durasi Sewa</Text>
                    </View>
                    <View style={style.icon}>
                            <Text>Tanggal Keluar</Text>
                    </View>
                </View>
                <View style={style.line}/>
                <View style={{flex:1,flexDirection:'row', marginVertical:10}}>
                        <View style={{ alignItems:'flex-start', marginRight:15}}>
                        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                    style={{width: 100, height: 100}} />
                        </View>
                        <View style={{flex:1,alignItems:'flex-start'}}>
                            <Text>
                              Nama Kos 
                            </Text>
                            <View style={{flex:1, flexDirection:'row', marginTop:10}}>
                                <View style={{flex:1, flexDirection:'row'}}>
                                    <EvilIcons name="calendar"  size={25}/>
                                    <EvilIcons name="share-google"  size={25}/>
                                </View>
                            </View>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <View style={{flex:1, flexDirection:'row'}}>
                            <Text style={{fontWeight:'bold'}}>Rp. 1.750.000 / bulan</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                <View style={style.line} />
                <View style={{flex:1, marginVertical:10}} >
                    <View style={style.residance}>
                        <View style={{ alignItems:'flex-start'}}>
                            <Text style={{fontWeight:'bold'}} >
                            Data Penghuni
                            </Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text>
                            Ubah
                            </Text>
                        </View>
                    </View>
                    <View style={style.residance}>
                        <View style={{ alignItems:'flex-start'}}>
                            <Text>
                            Nama Lengkap
                            </Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text>
                            Lol
                            </Text>
                        </View>
                    </View>
                    <View style={style.residance}>
                        <View style={{ alignItems:'flex-start'}}>
                            <Text>
                            Jenis Kelamin
                            </Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text>
                           Laki-laki
                            </Text>
                        </View>
                    </View>
                    <View style={style.residance}>
                        <View style={{ alignItems:'flex-start'}}>
                            <Text>
                            No. Handphone
                            </Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text>
                           08384028732
                            </Text>
                        </View>
                    </View>         
                    <View style={style.residance}>
                        <View style={{ alignItems:'flex-start'}}>
                            <Text >
                            Pekerjaan
                            </Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text>
                            Karyawan
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={style.line} />
                <View >
                    <Text style={{fontWeight:'bold', alignItems:'flex-end',marginTop:10}}>
                        Keterangan Biaya Lain
                    </Text>
                </View>
                <View style={{flex:1, justifyContent:'flex-end', alignContent:'flex-end', marginTop:30}} >
                    <View style={{flexDirection:'row', alignItems:'center', marginBottom:5}}>
                        <Checkbox
                        color='#2980b9'
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: !checked }); }}
                        />
                        <Text>
                            Saya menyetujui syarat dan ketentuan berlaku dan memastikan data di atas benar.
                        </Text>
                    </View>
                    <View style={{marginBottom:5}}>
                        <Button  color="#2980b9" disabled={!isEnable} mode="contained" onPress={() => {
                            this.props.navigation.navigate('Bookinglist')
                        }}>
                            Book
                        </Button>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
        )
    }
}

const style = StyleSheet.create(
    {
        container: {
            flex:1,
            marginHorizontal:10
        },
        time:{
            flexDirection:'row',
            marginRight:15,
            marginVertical:15
        },
        residance:{
            flex:1,
            flexDirection:'row', 
            marginBottom:5
        },
        icon:{
            marginRight:25
        },
        line: {
            padding: 0,
            backgroundColor: '#f2f0f0',
            width: 900,
            height: 5,
        },
    }
)