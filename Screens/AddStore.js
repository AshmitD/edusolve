import React from 'react';
import Fire from '../Fire'
import { Ionicons } from '@expo/vector-icons'
import { PercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView, Linking, TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from 'react-native'
export default class AddStore extends React.Component {
    constructor() {
        super()
        this.state = {
            myStore: {},
            websiteUrl: '',
            coupons: []
        }
        this.fillMyStore()
    }
    fillMyStore() {
        Fire.shared.getStore().then((store) => {
            console.log('this is coupons', store.user.coupons.split(', '))
            this.setState({ myStore: store.user })
            this.setState({coupons: store.user.coupons.split(", ")})
            this.setState({ websiteUrl: store.user.linkToWebsite })
            console.log("this is my store", this.state.myStore.linkToWebsite)
        })
    }
    render() {
        console.log("this is my store", this.state.myStore)
        return (
            <View style ={{backgroundColor: '#FED766'}}>
            {Object.keys(this.state.myStore).length == 0 && <View style={{ height: '100%',alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center', color: "#Fe4a49", fontSize: 20, paddingHorizontal: 25, marginTop: hp("25%") }}>You haven't created a store yet...</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("CreateStoreScreen")} style = {{ alignSelf: 'center',marginTop: 15,backgroundColor: '#FFBD00', paddingVertical: 10, textAlign: 'center',paddingHorizontal: 25, borderRadius: 10 }}><Text style ={{fontSize: 25,fontFamily: 'Futura', alignSelf: 'center'}}>Create a store!</Text></TouchableOpacity>
                </View>}

         {Object.keys(this.state.myStore).length !== 0 &&   <ScrollView style={{backgroundColor:'#FED766', height: '100%' }}>
         <View style ={{textAlign: 'center', backgroundColor: '#fe4a49',paddingBottom:'0.95%', width: '100%',justifyContent: 'center',textAlign: 'center',alignItems: 'center'}}>
             
        <Text style ={{ paddingTop: '8%', fontSize: 28, textTransform: 'uppercase', fontStyle: 'normal',alignSelf: 'center',alignItems: 'center', fontWeight: '600', color: "#F8E9A1"}}>My Store</Text>
            

        </View>
        <View
          style={{
            // backgroundColor: '#5bd1de',
            // justifyContent: 'center',
            // flexDirection: 'row',
            width: '100%',
            // alignItems: 'center',
          }}>
        
          
          <Text
            style={{
              paddingTop: '5%',
              fontSize: 28,
              textTransform: 'uppercase',
              fontStyle: 'normal',
              fontWeight: '600',
              color: '#009FB7',
              textAlign: 'center',
            }}>
          </Text>
        </View>
        <View style={{ marginHorizontal: 15 }}>
          <View style={styles.header}>
            <Text
              style={{
                  alignSelf: 'center',
                borderColor: '#fffff',
                padding: 20,
                fontSize: 50,
                fontWeight: '300',
                fontFamily: 'Futura',
                color: '#fed766',
                textAlign: 'center' 

              }}>
              {this.state.myStore.name}
            </Text>
          </View>
          <View style={{ width: '100%',marginHorizontal: 15, marginTop:30, borderRadius: 20, backgroundColor: '#004752', textAlign: 'center', paddingHorizontal: 20,paddingBottom: 15,alignSelf: 'center', height:'auto', paddingTop: 0,}}>
            <Text style={{ color: '#FED766', alignSelf: 'center',fontFamily: 'Futura', marginHorizontal: 90, fontSize: 30, width:130, }}>{"Products"}
            </Text>
            
          <Text style={{ textAlign: 'center',marginTop:15, color: '#e6e6ea',textTransform: 'uppercase', fontSize: 18, textTransform: 'uppercase',fontFamily: 'Avenir', fontSize: 18,alignSelf: 'center',}}>{this.state.myStore.products}
          </Text>
          
         
          </View>
          <View style={{ width: '100%',marginHorizontal: 15,marginTop:30, borderRadius: 20, backgroundColor: '#004752', textAlign: 'center', height:'auto', alignItems: 'center',alignSelf: 'center'}}>
          <Text style={{ marginBottom: 10,fontFamily: 'Futura', alignSelf: 'center',fontSize: 30, marginHorizontal: 90, color: '#FED766'}}>{"Coupons"}
          </Text>
          <Text style={{margintop:50,fontFamily: 'Avenir', fontSize: 48, marginHorizontal: 10, fontWeight: '900',color: '#fe4a49',textTransform: 'uppercase', fontSize: 18, textAlign: 'center'}}>{this.state.coupons.join('\n\n')}
          </Text>
              
          <TouchableOpacity onPress={()=> Linking.openURL(this.state.myStore.linkToWebsite)}
style={{borderRadius: 10, alignSelf: 'center',marginVertical: 10,backgroundColor: '#Fed766'}}>
          <View style={{marginLeft: 25,width: '100%',paddingVertical: 5, marginHorizontal: 15,marginTop:5, borderRadius: 10,alignSelf:'center', textAlign: 'center',width: 200, height:'auto', alignItems:'center', paddingHorizontal: 20, textAlign:'center'}}>
          <Text style={{fontFamily:'Futura', color:'#FE4a49', alignSelf:'center', marginHorizontal: 90, fontSize: 29, width:200, alignSelf: 'center', textAlign: 'center'}}>{"REDEEM"}
          </Text>
          </View>
          </TouchableOpacity>
          </View>
      
          <View style={{width: '100%', marginTop:30, borderRadius: 20, backgroundColor: '#004752', textAlign: 'center', height:'auto', alignSelf: 'center', paddingBottom: 20,paddingHorizontal: 20,marginBottom: 30,}}>
          <Text style={{ fontFamily: 'Futura', fontSize: 30, marginHorizontal: 90,marginBottom: 20,  color: '#FED766'}}> {"Location"}
          </Text>
          <Text style={{margintop:20,fontFamily: 'Avenir', fontSize: 15, marginHorizontal: 10, color: '#e6e6ea',textTransform: 'uppercase', fontSize: 18, textAlign: 'center'}}>{this.state.myStore.location}
          </Text>
          </View>
         
         
          



        </View>
      </ScrollView>}
            </View>
        );

    }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#009FB7',
      borderRadius: 20,
      marginTop: 30,
      fontSize: 1000,
      textAlign: 'center',

      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '100%',
      marginHorizontal: 15,
  },
}) 