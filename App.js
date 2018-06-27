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
import Perfil from './src/screens/Profile/Profile'; 
import Home from './src/screens/Home/TabNavigator/Home'; 

import EditarPerfil from './src/screens/Profile/EditarPerfil';
import MisMascotas from './src/screens/Profile/MisMascotas';
import MisPaseos from './src/screens/Profile/MisPaseos';

import DrawerNavigator from './src/screens/DrawerNavigator'; 
import index from './src/app/index'

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
  /*index : {
    screen : index
  },*/
  Login : {
    screen : Login
  },
  Home:{
    screen: Home
  },
  EditarPerfil : {
    screen : EditarPerfil
  }, 
  MisMascotas : {
    screen : MisMascotas
  },
  MisPaseos : {
    screen : MisPaseos
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
