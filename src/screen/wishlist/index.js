import React, {Component} from 'react';  
import {StyleSheet, Text, View,StatusBar} from 'react-native';  
import {createAppContainer} from 'react-navigation';   
import Icon from 'react-native-vector-icons/Ionicons';  
  
import WishlishNavigator from '../../navigation/WishlistNavigator';  
const AppIndex = createAppContainer(WishlishNavigator)  
  
export default class App extends Component{  
    render(){  
        return(  
            <View style={{flex:1}} >  
            
                <AppIndex/>  
            </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    wrapper: {  
        flex: 1,  
    },  
    header:{  
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'space-between',  
        backgroundColor: 'red',  
        paddingHorizontal: 18,  
        paddingTop: 5,  
    }  
});  