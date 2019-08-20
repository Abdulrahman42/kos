import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { TextInput, Button} from 'react-native-paper'

import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    header: null
};
  render() {
    return (
    //   <View style={styles.container}>
    //       <View style={{flex:1}}> 

      
    //       <TextInput
    //           mode='outlined'
    //           label='Masukan Nama'
    //           value={this.state.text}
    //           theme={{
    //             // roundness: 50,
    //             colors: {
    //               primary:'green',
    //               underlineColor:'transparent',
    //             }
    //           }}
    //         onChangeText={text => this.setState({ text })}
    //             />
    //           
    //                 </View>
    //                 <View>

    //     <Text> Don't Have an a account?  </Text>
    //     <Text>Register here</Text>
    //                 </View>
    //   </View>
       <View style={styles.container}>
       <View style={{justifyContent:'center'}} >
         {/* <View>
         <EvilIcons name="share-google"  size={80}/>
         </View> */}
         <View style={{flex:1}}>
         <TextInput
              mode='outlined'
              label='Masukan Nama'
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
             
            
                <TextInput
              mode='outlined'
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
         <Text style={styles.text}>
           Kamu belum login nih, yuk login untuk menikmati 
         </Text>
         <Text>
         fitur mamikos lebih banyak
         </Text>
       <Button style={styles.button}  mode="contained" onPress={()=>{
                             this.props.navigation.navigate('Login')}}> Login
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
     alignItems:'center', padding:40
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
    