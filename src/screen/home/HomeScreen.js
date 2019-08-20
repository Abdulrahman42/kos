import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import Slideshow from 'react-native-slideshow';
import { Card } from 'react-native-elements';
 
 
const data = [
    {
        imageUrl: "https://tvlk-prod-asset.imgix.net/v2/generic/C8Kj5%2FdCnE75BMxGpYYdcJVuEQbV3CnmF8ONfpQKM2nSWWBIIZYawS1qMa7rEFnfs%2Bc6JTIn%2F9eWmROh4eXx4ZssIR2KXspZq%2Fe9SQLmUa43pISCJAoXRUVJSye8FZfeChYiQzyFm1as70ls08UeLWReKWsMmCPtjfJmDLu0nKUNGRmQEL67NY1R1CjHsUI25HQN1bxZHDC2QTuZzjMjXDa1D%2Frh0amIqMAaql1HEHTOhYMjY%2BqHmYRaDW9fijWdcPLkCFSFu4zpbxyaDOY1PFK95ljjK7xoKHdv05V5Ce2ltGHZPHkJu0u6YltE%2B9U8q8tH1ZJ64VVL3o0dA6lMFryXN5KcPtv7cPXVby3hNwNL2iw5FQoTEher1oQ6Ha2oSLjDIYBoJYznu2hR8JgZGjurnveO4xcWYNBSjtYnf9oUQKVujuvhpbuMJfGeu19%2FDJblFa9UqPJszOF7QDZT0TWlpbz%2BI4u7IWotoAUkJ6BnXCYPbWGrNpFhD0iwivvkR4FI8%2FOmFJLM%2BOBjrNRq5if24T6feVhmwOewBTLxRbgrg451Plaots%2FsWKSWPk%2FsxNu2rUgSrM3pqjqZJaxcFQ%3D%3D?auto=compress%2Cformat&cs=srgb&ixlib=java-1.1.12&q=75&tv-dynamic=true",
        title: "Malang",
        id: 1
    },
    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuU1Z70DyK-V_zwPdVRiMDur14UhfWDGu7RQ18RM4OmxqVDJY-",
        title: "Jakarta",
        id: 2
    },
    {
        imageUrl: "https://assets-a1.kompasiana.com/items/album/2016/05/30/tugu-jogja-574c15cd83afbdc406776f50.jpg?t=o&v=1200",
        title: "Yogyakarta",
        id: 3
    },
    {
        imageUrl: "https://backpackerjakarta.com/wp-content/uploads/2016/09/lawang-sewu-semarang.jpg",
        title: "Semarang",
        id: 4
    },
    {
        imageUrl: "https://awsimages.detik.net.id/content/2016/05/05/1519/buaya.jpg",
        title: "Surabaya",
        id: 5
    },
    {
        imageUrl: "https://www.jember1tv.co.id/wp-content/uploads/2016/08/bali.jpg",
        title: "Denpasar",
        id: 6
    }
];
 
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    url: 'https://mamikos.com/uploads/cache/data/user/2019-01-28/I9kswUvH-360x480.jpg',
                }, {
                    url: 'https://static.mamikos.com/uploads/cache/data/user/2019-08-02/T71F3KDd-360x480.jpg',
                }, {
                    url: 'https://mamikos.com/uploads/cache/data/user/2019-02-06/tYYKBgjd-360x480.jpg',
                }, {
                    url: 'https://static.mamikos.com/uploads/cache/data/user/2019-07-31/z2algAvh-360x480.jpg',
                }
            ],
            data: data
        };
    }
 
    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 3000)
        });
    }
 
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    static navigationOptions = {
        header: null
    };
 
    render() {
        return (
            <View style={styles.container}>
                <Appbar.Header style={styles.header}>
                    <Appbar.Content title={<Text style={styles.title}>KostKu</Text>} />
                </Appbar.Header>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.body}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color:'#000000' }}>Hai</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color:'#000000' }}>Mau cari kost dimana ?</Text>
                        <Button style={styles.button} icon="search" color="#d0d0d0"  mode="outlined" onPress={() => this.props.navigation.navigate('Kostlist')}><Text style={styles.button}>Masukan alamat atau nama tempat</Text></Button>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.body}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black', marginBottom: 5, marginTop: 10 }}>Promo</Text>
                        <Slideshow
                            dataSource={this.state.dataSource}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({ position })}
                            arrowSize={0}
                            height={150}
                            style={styles.slideshow}
                        />
                        <View style={{ padding: 5, borderRadius: 5, backgroundColor: '#1BAA56', height: 50, marginTop: 10 }}>
                            <View style={{paddingLeft:15}}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 13 }}>Anda Pemilik Kost ?</Text>
                                <Text style={{ color: 'white', fontSize: 13 }}>Masuk Atau Daftar Disini</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
                                <Button mode='outlined' style={{borderColor:'white', position: 'absolute', width: 80, height: 30 }} onPress={()=>{ this.props.navigation.navigate('Auth')
                        }}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}>Login</Text></Button>
                            </View>
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black', marginBottom: 5, marginTop: 10 }}>Kota Populer</Text>

                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.title}
                            data={this.state.data}
                            renderItem={({ item: rowData }) => {
                                return (
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Kostlist')}>
                                    <Card 
                                        title={null}
                                        containerStyle={{ padding: 0, width: 120, marginBottom:5, marginLeft: 1, maxHeight: 190 }}
                                        image={{ uri: rowData.imageUrl , position: 'relative' }} 
                                        >
                                        <Text style={{ marginBottom: 0 }} position={'absolute'}>
                                            {rowData.title}
                                        </Text>
                                    </Card>
                                        </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                </ScrollView>
            </View >
        );
    }
}
 
export default Index
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header:{
      backgroundColor:'white'
    },
    slideshow: {
        flex: 1,
        marginBottom: 10
    },
    line: {
        padding: 0,
        backgroundColor: '#f2f0f0',
        width: 900,
        height: 10
    },
    body: {
        backgroundColor: 'white',
        paddingHorizontal:15
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
        fontSize: 13,
        backgroundColor: '#eeeeee',
    }
})