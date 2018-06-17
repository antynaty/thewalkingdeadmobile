import React from 'react';
import { StyleSheet, Text, View  } from 'react-native'; 
import {createStackNavigator} from 'react-navigation';

class Profile extends React.Component {
  static navigationOptions = {
    header : null 
  }
  render() {
    return (
        <View>
        </View>
    );
  }
} 

export default Profile;
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F7F8E0',
  } 
 
});
