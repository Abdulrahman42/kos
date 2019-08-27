import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text
} from "react-native";
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoadingScreen extends Component {
  state = {
    bagus:''
  }  
  constructor() {
        super();
        this.isLogin
        this._bootstrapAsync();
      }
    
      // Fetch the token from storage then navigate to our appropriate place
      _bootstrapAsync = async () => {
        try {
          const fetchDataMentah = await AsyncStorage.getItem('userToken');
          if (fetchDataMentah != null) {
            this.props.navigation.navigate('UserNavigator')
            
          } else {
            this.props.navigation.navigate('GuesNavigator')
          } 
        } catch (e) {
          alert(e)
        }
      };
    
    
      render() {
        return (
          <View style={[styles.container, styles.horizontal]}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold'
            }}>HARAP TUNGGU...</Text>
            <ActivityIndicator size={50} color="#1BAA56" />
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })
    
    //export default App;
    export default AuthLoadingScreen;