import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Plataform,

} from 'react-native';
import {createStackNavigator} from 'react-navigation';

// import Splash from './src/screens/Splash/Splash';
import Login from './src/screens/Login/Login'; 
import EditarPerfil from './src/screens/Profile/EditarPerfil';
import DrawerNavigator from './src/screens/DrawerNavigator'; 

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
      //<Splash/>
    );
  }
}
const RootStack = createStackNavigator({
  // Splash : {
  //   screen : Splash
  // },
  Login : {
    screen : Login
  }, 
  Perfil : {
    screen : Perfil
  },
  EditarPerfil : {
    screen : EditarPerfil
  }, 
  DrawerNavigator :{
    screen : DrawerNavigator,
    navigationOptions: {
      header: null 
    }
  }
  }, { 
    navigationOptions:{
      gesturesEnable: false
    }
  }
)
