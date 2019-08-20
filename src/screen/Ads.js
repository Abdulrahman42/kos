import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { TextInput, RadioButton,Appbar , Button, Searchbar} from 'react-native-paper';

const {height} = Dimensions.get('window')

export default class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {
        checked:'first',
        screenHeight:0
    };
  }
  onContentSizeChange =(ContentWidth, ContentHeight)=>{
      this.setState({ screenHeight: ContentHeight})
  }
  render() {
    const { checked } = this.state;
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <View style={{flex:1}}>
          <Appbar.Header style={styles.header}>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        <Appbar.Content
          title="Tambah Data Iklan"
        />
        </Appbar.Header>
        
          <ScrollView showsVerticalScrollIndicator={false} 
          onContentSizeChange={this.onContentSizeChange}
          scrollEnabled={scrollEnabled} >
          <View style={styles.container}>
        <View style={{marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold', fontSize:18}}>Judul Iklan</Text>
                <Text style={{color:'red'}}>*</Text>
            </View>
            <TextInput
            style={{backgroundcolor:'white'}}
            mode='flat'
            theme={{
                // roundness: 50,
                colors: {
                  primary:'green',
                  underlineColor:'transparent',
                }
              }}
            label='Tuliskan judul yang sesuai barang atau jasa anda'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            />
        </View>
        <View style={{marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold', fontSize:18}}>Harga barang atau jasa anda</Text>
                <Text style={{color:'red'}}>*</Text>
            </View>
            <TextInput
            keyboardType={'numeric'}
            style={backgroundColor='white'}
            mode='flat'
            theme={{
                // roundness: 50,
                colors: {
                  primary:'green',
                  underlineColor:'transparent',
                }
              }}
            label='Tuliskan harga barang/jasa'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
                />
        </View>
        <View style={{marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold', fontSize:18}}>Deskripsi barang atau jasa</Text>
                <Text style={{color:'red'}}>*</Text>
            </View>
            <TextInput
            style={{backgroundcolor:'white'}}
            mode='flat'
            theme={{
                // roundness: 50,
                colors: {
                  primary:'green',
                  underlineColor:'transparent',
                }
              }}
            label='Deskripsikan barang/jasa anda agar mudah dipahami'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
                />
        </View>
        <View style={{marginBottom:5}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>Kategori</Text>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'row', alignItems:'center', marginRight:15}}>
                    <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'first' }); }}
                    />
                    <Text>barang</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'first' }); }}
                    />
                    <Text>jasa</Text>
                </View>
            </View>
        </View>
        <View style={{marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold', fontSize:18}}>Lokasi penjual barang dan jasa</Text>
                <Text style={{color:'red'}}>*</Text>
            </View>
            <Button style={styles.button} icon="search" color="#d0d0d0"  mode="outlined" ><Text style={styles.button}>Cari alamat penjual barang/jasa</Text></Button>
            <View style={{ marginTop:5}}>
                <Button style={{backgroundColor:'#1BAA56', width:100,paddingHorizontal:0, paddingVertical:0}} mode="contained" onPress={() => console.log('Pressed')}>
                <Text style={{fontSize:10 }}>Ubah Lokasi</Text>
                </Button>
                {/* <Text style={{color:'white', fontSize:14}}>Ubah Lokasi</Text> */}
            </View>
        </View>
        <View style={{marginBottom:5}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>Tuliskan alamat lengkap penjual</Text>
            <TextInput
              mode='flat'
              label='masukan seperti jalan, kelurahan'
              value={this.state.text}
              theme={{
                // roundness: 50,
                colors: {
                  primary:'green',
                  underlineColor:'transparent',
                }
              }}
            onChangeText={text => this.setState({ text })}
                />
        </View>
        <View style={{marginBottom:5}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>Foto-foto barang atau jasa</Text>
        </View>
        <View style={{marginBottom:5}}>
            <Text style={{fontWeight:'bold'}}>
                Kontak yang bisa dihubungi
            </Text>
        </View>
        <View style={{marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>Nama</Text>
                <Text style={{color:'red'}}>*</Text>
            </View>
            <TextInput
            style={{backgroundcolor:'white'}}
            mode='flat'
            label='Tulis nama lengkap atau sapaan anda'
            value={this.state.text}
            theme={{
                // roundness: 50,
                colors: {
                  primary:'green',
                  underlineColor:'transparent',
                }
              }}
            onChangeText={text => this.setState({ text })}
                />
        </View>
        <View style={{marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>Nomor Telepon/Hp</Text>
                <Text style={{color:'red'}}>*</Text>
            </View>
            <TextInput
            style={{backgroundcolor:'white'}}
            mode='flat'
            theme={{
                // roundness: 50,
                colors: {
                  primary:'green',
                  underlineColor:'transparent',
                }
              }}
            label='tulis no telepon/hp'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
                />
        </View>
        </View>
        </ScrollView>
        <View style={{marginBottom:0, paddingHorizontal:10, paddingBottom:10}}>
            <Button style={{backgroundColor:'#F95516', height:55, paddingHorizontal:10}} mode="contained" onPress={() => console.log('Pressed')}>
            <Text style={{fontSize:20}}>Submit</Text>
            </Button>
        </View>
      </View>
    );
  }
}

const styles =StyleSheet.create({
    container:{
        marginHorizontal: 10,
        marginVertical:10
    },
    header:{
        backgroundColor:'#1BAA56'
    }
})