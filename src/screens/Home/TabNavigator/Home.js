import React from 'react';
import { StyleSheet, Text, View  } from 'react-native'; 
import {createStackNavigator} from 'react-navigation';

class Home extends React.Component { 
  render() {
    return (
        <View>
            <Text> hola </Text>
        </View>
    );
  }
} 

export default Home; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F7F8E0',
  } 
 
});