

import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'
import AddStore from './Screens/AddStore'
import HomeScreen from './Screens/HomeScreen'
import MoreInfo from './Screens/MoreInfo'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import CreateStore from './Screens/CreateStore'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {

        tabBarIcon: ({tintColor}) => <Ionicons
        style = {{alignContent: 'center'}}
        name = "ios-home" 
        size = {24} 
        color = {tintColor}/> 
      }
    },
    AddScreen: {
      screen: AddStore,
      navigationOptions: {

        tabBarIcon: ({tintColor}) => <Ionicons
        style = {{alignContent: 'center'}}
        name = "ios-person" 
        size = {24} 

        color = {tintColor}/> 
      }
    },
   
   
   
    // Group: {
    //   screen: GroupsScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({tintColor}) => <Ionicons 
    //     style = {{
    //       alignContent: 'center',
    //       shadowColor: "#E9446A",
    //       shadowOffset: {width: 0, height: 0, shadowRadius: 10, shadowOpacity: 0.3}
    //     }}
    //     name = "ios-people" 
    //     size = {24} 
    //     color = {tintColor}/> 
    //   }
    // },
    // Profile: {
    //   screen: ProfilePage,
    //   navigationOptions: {
        
    //     tabBarIcon: ({tintColor}) => <Ionicons 
    //     style = {{
    //       alignContent: 'center',
    //       shadowColor: "#E9446A",
    //       shadowOffset: {width: 0, height: 0, shadowRadius: 10, shadowOpacity: 0.3}
    //     }}
    //     name = "ios-person" 
    //     size = {24} 
    //     color = {tintColor}/> 
    //   } 
    },
    {
      tabBarOptions: {
        inactiveTintColor: "#FED6",
        activeTintColor: "blue",
        showLabel: false,
        lazy: false,
        style: {
          backgroundColor: '#009FB7',
          height: 48
        }
      } 
    } 
  );
  const OtherStack = createSwitchNavigator({
    MoreInfoAboutStore: {
      screen: MoreInfo,
      navigationOptions: {
        header: () => false
      }
    },
    CreateStoreScreen: {
      screen: CreateStore,
      navigationOptions: {
        header: () => false
      }
    },
  })
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 

export default createAppContainer(
  createSwitchNavigator(
   { 
    App: AppTabNavigator,
    Other: OtherStack,
   },
   {

   }  
  )
)