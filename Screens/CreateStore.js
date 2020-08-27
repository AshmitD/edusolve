import React from 'react';
import Fire from '../Fire'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, StatusBar, TextInput,Linking, TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from 'react-native'
export default class AddStore extends React.Component {
    constructor() {
        super()
        this.state = {
            name: " ",
            descrip:" ",
            coupons:' ', 
            error: null,
            linkToWebsite: " ",
            address: " ",
            products: ' '
        }

    }
    createStore() {
        console.log("this is everything", this.state.name, this.state.descrip, this.state.coupons, this.state.linkToWebsite, this.state.address, this.state.products)
        Fire.shared.createStore({"name": this.state.name, "descrip": this.state.descrip, "coupons": this.state.coupons,"linkToWebsite": this.state.linkToWebsite, "address": this.state.address,"products":this.state.products}).then(() => {
            console.log("do you get here?")
        })
        this.props.navigation.navigate('AddScreen')
    }
    render() {

        return (
            <ScrollView>
            <View style = {styles.container}>
                
                <StatusBar barStyle = "light-content"></StatusBar>
                 {/* <Image style = {{left: 305, width: 100, height: 100, marginTop: 2}}source ={require('../forreallogo.png')}></Image> */}
                 <View style ={{textAlign: 'center', backgroundColor: '#fe4a49',paddingBottom:'0.95%',flexDirection: 'row', width: '100%',alignItems: 'center'}}>
               <TouchableOpacity  style={{  marginLeft: 25, paddingTop: '8%'}} onPress={() => {this.props.navigation.navigate("AddScreen") }}><Ionicons size={36} color={"#24305E"} name="ios-arrow-round-back"></Ionicons></TouchableOpacity>
        <Text style ={{ paddingTop: '8%', fontSize: 28, textTransform: 'uppercase', fontStyle: 'normal', marginLeft: 60, fontWeight: '600', color: "#F8E9A1"}}>Create a Store</Text>
            

        </View>
                
                <View style = {styles.errorMessage}>
                    {this.state.errorMessage && <Text style = {styles.error}>{this.state.errorMessage}</Text>}
                </View>
    
                <View style = {styles.form}>
                    <View style = {{marginTop: -35}}>
                        <Text style = {styles.inputTitle}>What is the name of your store?</Text>
                        <TextInput
                        style = {styles.input}
                       
                  
                        onChangeText ={name => this.setState({name})}
                        value = {this.state.name}></TextInput>
                    </View>
            
                    <View style = {{marginTop: 32}}>
                        <Text style = {styles.inputTitle}>Please describe your store: </Text>
                        <TextInput
                        style = {styles.longText}

                        multiline = {true} numberOfLines={4} 
                        onChangeText ={descrip => this.setState({descrip})}
                        value = {this.state.descrip}
                        ></TextInput>
                    </View>
    
                    <View style = {{marginTop: 32}}>
                        <Text style = {styles.inputTitle}>What are some of the products you sell?</Text>
                        <TextInput
                        style = {styles.longText}
                      
                        multiline = {true} numberOfLines={4} 
                        onChangeText ={products => this.setState({products})}
                        value = {this.state.products}
                        ></TextInput>
                    </View>
                    <View style = {{marginTop: 32}}>
                        <Text style = {styles.inputTitle}>What are some coupons that you can offer?</Text>
                        <TextInput
                        style = {styles.longText}
                      
                        multiline = {true} numberOfLines={4} 
                        onChangeText ={coupons => this.setState({coupons})}
                        value = {this.state.coupons}
                        ></TextInput>
                    </View>
                    <View style = {{marginTop: 32}}>
                        <Text style = {styles.inputTitle}>What is the store's address?</Text>
                        <TextInput
                        style = {styles.longText}
                      
                        multiline = {true} numberOfLines={4} 
                        onChangeText ={address => this.setState({address})}
                        value = {this.state.address}
                        ></TextInput>
                    </View>
                    <View style = {{marginTop: 32}}>
                        <Text style = {styles.inputTitle}>Provide a link to the store website: </Text>
                        <TextInput
                        style = {styles.link}
                      
                        multiline = {true} numberOfLines={1} 
                        onChangeText ={linkToWebsite => this.setState({linkToWebsite})}
                        value = {this.state.linkToWebsite}
                        ></TextInput>
                    </View>
                   
    
                   
                    </View>
                <TouchableOpacity style = {styles.button} onPress = {() => {this.createStore()}}>
                    <Text style = {{color: "white"}}>CREATE STORE</Text>
                </TouchableOpacity>
                
              
    
            </View>
    
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FED766',
        height: 1200
      },

      errorMessage: {
          height: 72,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 30
      },
      form: {
          marginBottom: 48,
          marginHorizontal: 30,
      },
      error: {
          color: "#E9446A",
          fontSize: 13,
          fontWeight: "600", 
          textAlign: "center"
      },
      inputTitle: {
          color: "#009FB7",
          fontSize: 14,
          textTransform: "uppercase"
      },
      header: {
          paddingTop: 64,
          paddingBottom: 16,
          backgroundColor: "#009FB7",
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 3,
          borderBottomColor: '#F76C6C',
          flexDirection: "row",
         
          paddingBottom: 5,
          marginBottom: 15,
          alignSelf: 'center'
      },
      headerTitle: {
          fontSize: 30,
          fontWeight: "500",
          alignSelf: 'center',
          color: "#009FB7",
          textAlign: 'center'
      },
      back: {
          position: "absolute",
          top: "9%",
          left: "-16%",
          width: "15%",
          height: "7.5%",
          borderRadius: 31,
          alignItems: 'center',
          backgroundColor: "rgba(21,22,48,0.1)",
          justifyContent: 'center'
      },
      input: {
          borderBottomColor: "#009FB7",
          borderBottomWidth: StyleSheet.hairlineWidth,
          height: 40,
          fontSize: 15,
          color: "#24305E",
          paddingTop: 10,
      },
      longText: {
          height: 80,
          borderBottomColor: "#009FB7",
          borderBottomWidth: StyleSheet.hairlineWidth,

          fontSize: 15,
          color: "#161F3D",      
      },
      link: {
        height: 50,
        borderBottomColor: "#009FB7",
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontSize: 15,
        color: "#161F3D",      
    },
     lastInputTitle: { 
      color: "#009FB7",
          fontSize: 13,
          textTransform: "uppercase",
          marginLeft: 6,
          marginBottom: 5
  },
      button: {
          marginHorizontal: 40,
          backgroundColor: "#fe4a49",
          borderRadius: 4,
          height: 52,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: -1,
      },
  
}) 