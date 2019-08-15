import React, { Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { Appbar, Button, Checkbox } from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons'



export default class Chat extends Component{
    state = {
        checked: false,
      };
      render(){
        const { checked } = this.state;    
        return(
        <View style={{flex:1}}>
            <Appbar.Header style={{backgroundColor:'#2980b9'}}>
                <Appbar.Content
                title='Booking'>
                </Appbar.Content>
            </Appbar.Header>
            <View  style={style.container}>
                <View style={style.time}>
                    <View style={style.icon}>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('Calender')
                        }}>
                            <Text>Tanggal Masuk</Text>
                            <View style={{alignItems:'flex-end'}}>
                            <EvilIcons name="calendar"  size={25}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.icon}>
                        <TouchableOpacity>
                            <Text>Durasi Sewa</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.icon}>
                        <TouchableOpacity>
                            <Text>Tanggal Keluar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.line} />
           
                <View style={{flex:1,flexDirection:'row', marginTop:10}}>
                        <View style={{ alignItems:'flex-start', marginRight:15}}>
                        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                    style={{width: 100, height: 100}} />
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text>
                              mamamamdfmamfsamdfm masd madmasfmamf
                            </Text>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <View style={{flex:1, flexDirection:'row'}}>

                            <EvilIcons name="calendar"  size={25}/>
                            <EvilIcons name="share-google"  size={25}/>
                                </View>
                            </View>
                        </View>
                    </View>
                <View style={style.line} />
                <View style={{flex:1, marginTop:10}} >
                    <View style={{flex:1,flexDirection:'row'}}>
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
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{ alignItems:'flex-start'}}>
                            <Text>
                            Nama Lengkap
                            </Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text>
                            Ubah
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{ alignItems:'flex-start'}}>
                            <Text>
                            Jenis Kelamin
                            </Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text>
                            Ubah
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{ alignItems:'flex-start'}}>
                            <Text>
                            No. Handphone
                            </Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text>
                            Ubah
                            </Text>
                        </View>
                    </View>         
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{ alignItems:'flex-start'}}>
                            <Text >
                            Pekerjaan
                            </Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text>
                            Ubah
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={style.line} />
                <View>

                    <Text style={{fontWeight:'bold', alignItems:'flex-start', marginTop:10}}>
                        Keterangan Biaya Lain
                    </Text>
                </View>
                <View style={{flex:1, justifyContent:'flex-end', alignContent:'flex-end', marginBottom:10}} >
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
                        <Button color="#2980b9" mode="contained" onPress={() => console.log('Pressed')}>
                            Book
                        </Button>
                </View>
            </View>
        </View>
        )
    }
}

const style = StyleSheet.create(
    {
        container: {
            flex:1,
            marginRight:10,
            marginLeft:10,
            // marginTop:10
        },
        time:{
            flexDirection:'row',
            marginRight:15,
            marginTop:15,
            
        },
        icon:{
            marginRight:25
        },
        line: {
            padding: 0,
            backgroundColor: '#f2f0f0',
            width: 900,
            height: 5,
            marginTop:5
        },
        huni:{
            alignItems:'flex-start',
            marginTop: 10
        }
    }
)