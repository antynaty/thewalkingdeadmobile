import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
 
class MisMascotas extends React.Component { 
  render() {
    return ( 
      <View style={styles.container}> 
              <Text> Mis Mascotas</Text>
      </View>
    );
  }
} 

export default MisMascotas;
 

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  }
});
