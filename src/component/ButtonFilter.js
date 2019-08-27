import React, { Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { Button } from 'react-native-paper';



export default class ButtonList extends Component{
    render(){
        return(
            <View style={{position:'absolute', bottom:0, flexDirection:'row',flex:1, alignSelf:'center', paddingBottom:15}}>
                <Button
                onPress={()=>alert('ini filter')}
                style={styles.Button} icon='art-track' size={50} color={'#1BAA56'}mode={'outlined'}
                >
                    <Text>Filter</Text>
                </Button>
                <Button
                onPress={()=>alert('ini urutan')}
                style={styles.Button} icon='low-priority' size={50} color={'#1BAA56'}mode={'outlined'}
                >
                    <Text>Filter</Text>
                </Button>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    Button:{
        width:100,
        height:40,
        backgroundColor:'white'
    },
    Bar:{
        maxWidth:6,
        height:40,
        backgroundColor:'white'
    },
    Viewx:{
        marginLeft: 30,
    }
})