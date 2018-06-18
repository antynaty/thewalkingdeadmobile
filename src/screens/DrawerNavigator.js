import React from 'react'; 
import {  
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
 
import Profile from './Profile/Profile'; 
import HomeScreenTabNavigator from './Home/HomeScreenTabNavigator';
// 
const InnerStackNavigator = createStackNavigator({ // en HOME las tabs de abajo
    tabNavigator: { 
        screen: HomeScreenTabNavigator
    }
});
const AppDrawerNavigator = createDrawerNavigator({  // apunta a profile
    Profile: {
      screen: Profile,
    },
    Notification:{
        screen: InnerStackNavigator
    }
});

export default AppDrawerNavigator;
