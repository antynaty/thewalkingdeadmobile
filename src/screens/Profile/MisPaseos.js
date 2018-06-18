import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
 
class MisPaseos extends React.Component { 
  render() {
    return ( 
      <View style={styles.container}> 
              <Text> Mis Paseos</Text>
      </View>
    );
  }
} 

export default MisPaseos;
 

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  }
});
