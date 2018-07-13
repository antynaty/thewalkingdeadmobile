import React from 'react';
import { 
    StyleSheet,  
} from 'react-native';
import { 
    createBottomTabNavigator,
    createDrawerNavigator
} from 'react-navigation'; 
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
  
import Home from './TabNavigator/Home';

export default class AppTabNavigator extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "The Walking Doge " ,
            headerLeft:
                <Ionicons name='md-menu' 
                        size={24} 
                        style={{paddingLeft:10}}
                        onPress={()=> navigation.openDrawer() }/> , 
            headerStyle: { backgroundColor: '#89B43F' }
        }
    }
    render() {
      return (
          <HomeScreenTabNavigator/> 
      );
    }
  }

const HomeScreenTabNavigator = createBottomTabNavigator ({ 
    Home : {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Profile') {
                  iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
              },

        }) 
    }

}); 