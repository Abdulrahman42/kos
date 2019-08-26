import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions, TextInput} from 'react-native';
import { Appbar, Card} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import search from '../screen/Search';

import {ButtonFilter } from './ButtonFilter'


const data = [
  {
   id:1,
   title:"Mami kos",
   price:'RP. 550.000/bulan',
   address:'jalan ini',
   imageUrl:'https://static.mamikos.com/uploads/cache/data/style/2019-06-25/DfQmJE8f-540x720.jpg',
    jenis: 'putri',
   room:'4 left room'

},
  {
   id:2,
   title:"Mami kosan",
   price:'RP. 750.000',
   address:'jalan nan',
   imageUrl:'https://static.mamikos.com/uploads/cache/data/style/2019-08-14/oWDZ3FjH-540x720.jpg',
   jenis: 'putra',
   room:'5 left room',
   


},
  {
   id:3,
   title:"Mami kosan2",
   price:'RP. 850.000',
   address:'jalan majapahit',
   imageUrl:'https://static.mamikos.com/uploads/cache/data/style/2019-03-11/SqjXlQo1-540x720.jpg',
    room:'2 left room',
    jenis: 'putri',

},
  {
   id:4,
   title:"Papi kos",
   price:'RP. 8.150.000',
   address:'jalan merdeka',
   imageUrl:'https://static.mamikos.com/uploads/cache/data/style/2019-02-13/fJbnkQOz-540x720.jpg',
   room:'no left room',
   jenis: 'putri',

},
{
 id:5,
 title:"Oma kos",
 price:'RP. 1.150.000',
 address:'jalan jalan',
 imageUrl:'https://static.mamikos.com/uploads/cache/data/style/2019-02-13/fJbnkQOz-540x720.jpg',
 room:'10 left room',
 jenis: 'putri',

}
]
const {width, height}= Dimensions.get('window');

export default class Kostlist_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:data
    };
  }
  render() {
    const {goBack} = this.props.navigation
    const{width, height}= Dimensions.get('window');
    return (
      <View >
        <Appbar.Header style={{backgroundColor:'white'}}>
        <Appbar.BackAction
          onPress={()=> goBack()}
          />
          <View style={{width:300}}>
          <TextInput
          placeholder={'search'}
          editable = {true}
          maxLength = {40}
          />  
          </View>
        </Appbar.Header>
          <ScrollView>
        <FlatList 
        keyExtractor={item => item.title}
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Kostdetail',{rowData: rowData})}>
               <Card style={styles.container}>
                   <Card.Cover source={{ uri: rowData.imageUrl }} />
                   <Card.Actions>
                     <View>
                     <View style={{flexDirection:'row'}}>
                       <Text style={{marginRight:10}}>putri</Text>
                       <Text style={{color:'green'}}>{rowData.room}</Text>
                     </View>
                     <View>
                       <Text style={{fontWeight:"bold"}}>{rowData.price}</Text>
                     </View>
                     <View>
                       <Text>{rowData.title}</Text>
                     </View>
                     </View>
                    </Card.Actions>
              </Card>
            </TouchableOpacity>
            );
        }}
        />
          </ScrollView>
        <View style={{flex:1}}>
          <View style={styles.filter}>
            <View style={{flex:1, flexDirection:'row'}}>
              <View style={{width:width*8/100,marginTop:18, marginLeft:5}}>
                <Icon
                name='ios-funnel'
                type='ionicon'
                color='#FF9800'
                />
         
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('filter')} underlayColor='white'>
            <View style={{width:width*14/100,marginLeft:4,marginTop:19}}>
              <Text style={{fontSize:16}}>
                Filter
              </Text>
            </View>
          </TouchableOpacity>
            <View
              style={{
                borderLeftWidth: 0.7,
                borderLeftColor:'#9E9E9E'
              }}
              />
              <View style={{width:width*10/100,marginTop:18,marginLeft:0}}/>
              <Icon
              name='ios-redo'
              type='ionicon'
              color='#FF9800'/>
            </View>
            <TouchableOpacity >
              <View style={{width:width*14/100,marginLeft:4, marginTop:19}}>
                <Text style={{fontSize:16}}>Sort</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </View>
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
    shadowRadius: 3.46,
    elevation: 9,
  },
  header:{
    width:280,
    backgroundColor: '#2980b9'
  },
  filter:{
    borderBottomWidth:0,
    shadowColor:'#2980b9',
    shadowOffset:{width:0,height:2},
    shadowOpacity:1,
    shadowRadius:4,
    elevation:1,
    borderRadius:8,
    position:'absolute',
    bottom:0,
    alignSelf:'center',
    backgroundColor:'#FFFFFF',
    width:width*50/100,
    height:60,
    marginBottom:20
  }
})