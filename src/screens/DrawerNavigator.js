import React from 'react'; 
import {  
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
 
import Profile from './Profile/Profile'; 
import HomeScreenTabNavigator from './Home/HomeScreenTabNavigator';
import Home from './Home/TabNavigator/Home';
import Map from './Home/TabNavigator/Map';

const InnerStackNavigator = createStackNavigator({ // en HOME las tabs de abajo
    tabNavigator: { 
        screen: HomeScreenTabNavigator
    }
});

const AppDrawerNavigator = createDrawerNavigator({  // apunta a profile
    Home:{
        screen : InnerStackNavigator
    },
    Profile: {
      screen: Profile,
    },
    Notification:{
        screen: InnerStackNavigator
        // screen: Notification
    },
    Map: { 
        screen : Map
    }
});

export default AppDrawerNavigator;
