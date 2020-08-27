import React from 'react';
import Fire from '../Fire'
import { Ionicons } from '@expo/vector-icons'
import {Searchbar} from 'react-native-paper'
console.disableYellowBox = true;
import { SearchableFlatList } from "react-native-searchable-list";
import { View, FlatList, Image,Text, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
export default class AddStore extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        text: '',
        allStores: [],
        
        }
    this.fillAllStores()
    }

    fillAllStores() {
        Fire.shared.allStores().then((stores) => {
          this.setState({allStores: stores})
        console.log("this is all stores", stores)
   
        })

        console.log("this is all stores", this.state.allStores)
    }

    handleSearch (text) {
        console.log('this is text',text)
        this.setState({query: text})
    }
    renderPost(item) {
        console.log("This is item", item)
        return (
            <View style ={{textAlign: 'center',borderRadius: 5, paddingHorizontal: 25, paddingVertical: 25,zIndex: '500', backgroundColor: '#004752',marginHorizontal: 20,marginVertical: 25}}>
                <View style ={{alignSelf: 'center'}}>
                <Text style ={{paddingBottom: 5,color: '#fe4a49', fontFamily: 'Avenir',textAlign: 'center',alignSelf: 'center', fontSize: 25, fontFamily: 'Avenir'}}>{item['name']}</Text>
                </View>
                <Text style ={{textAlign: 'center', fontFamily: 'Futura', alignSelf: 'center',color: '#009FB7'}}>{item['description']}</Text>
                <Text style ={{marginTop: 10,textAlign: 'center',fontFamily: 'Futura',color: '#FED766', alignSelf: 'center'}}>{item['products']}</Text>
               <TouchableOpacity style ={{marginTop: 25,flexDirection: 'row', alignItems: 'center'}} onPress={() => this.props.navigation.navigate("MoreInfoAboutStore", {
                        otherParam: item,
                      })}><Text style ={{fontSize: 20,width: 'auto',color: '#009fb7',marginLeft:5 }}>SHOP</Text><Ionicons style = {{marginLeft:240}}size={36} color={"#fe4a49"} name="ios-pricetags"></Ionicons></TouchableOpacity>
            
            </View>
        )
    }
    render() {

        return (
            <View style={styles.container}>
                <View style ={{marginTop: 35, width: '100%', alignSelf: 'center'}}>
                <View style ={{alignSelf: 'center', width: '32%', height: 2, backgroundColor: '#fe4a49'}}></View>
                <Text style ={{ zIndex: 50000, fontSize: 15, textTransform: 'uppercase', fontSize: 25, color: '#009fb7', textAlign: 'center',alignSelf: 'center', width: '70%'}}>Biz Boost</Text>
                </View>
                {/* <View style={{ flexDirection: 'row',marginLeft: 120, marginTop: 15 }}>
                    <TextInput autoCapitalize={true}
                        style ={{width: '69%', color: '#3ccfcf'}}
                        onChangeText={search => this.setState({ searchContent: search })}
                        value={this.state.searchContent}
                        placeholderTextColor = '#3ccfcf'
                        placeholder="What are you looking for?"></TextInput>
                    <TouchableOpacity style ={{ color: '#3ccfcf', borderRadius: '55', borderColor: '#3ccfcf', borderWidth :'5', paddingHorizontal: 20, backgroundColor: 'black',paddingVertical: 10}}><Ionicons
                        color = "#3ccfcf"
                        name="ios-search"
                        size={24}/></TouchableOpacity>
                </View> */}
                 <Searchbar
      placeholder="Search" lightTheme round inputStyle ={{color: '#009FB7'}}style ={{marginTop: 35, alignSelf: 'center', color: '#F4D3BE',borderBottomWidth: 5,borderBottomColor: '#009FB7',backgroundColor: '#FED766',width: '80%'}}
      onChangeText={text => this.setState({ text })} value={this.state.text}

    />
    <SearchableFlatList style ={{backgroundColor: '#FED766'}}
        //   data={this.state.allStores || []}
          data={this.state.allStores || []}
          searchTerm={this.state.text}
          searchAttribute={'searchThrough'}
          ignoreCase={true}
          renderItem={({ item }) => this.renderPost(item)}
          keyExtractor={item => item.id}
    />
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: '#FED766'
    }
}) 