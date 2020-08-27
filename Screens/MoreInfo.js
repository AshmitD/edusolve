import React from 'react';
import Fire from '../Fire'
import { Ionicons } from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {View, Text, Linking,StyleSheet, ScrollView,ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
console.disableYellowBox = true;
export default class AddStore extends React.Component {
     constructor(props) {
         super(props)
        const { params } = this.props.navigation.state;
        const item = params ? params.otherParam : null;
        const theseCoupons  = item.coupons.split(", ")
        this.state = {
            myStore: item,
            coupons: theseCoupons,
    
          }
     } 
    render() {
  
         return (
          
        <View style ={{backgoundColor: '#253536'}}>
             
            
               <ScrollView style={{backgroundColor:'#FED766', height: '100%' }}>
        <View
          style={{
            // backgroundColor: '#5bd1de',
            // justifyContent: 'center',
            // flexDirection: 'row',
            width: '100%',
            // alignItems: 'center',
          }}>
            <TouchableOpacity  style={{  marginLeft: 25, paddingTop: '5%',top: 10}} onPress={() => {this.props.navigation.navigate("Home") }}><Ionicons size={36} color={"#24305E"} name="ios-arrow-round-back"></Ionicons></TouchableOpacity>
          
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
      </ScrollView>
         </View> 
        )
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