import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
 
import MapView from 'react-native-maps'



class MisPaseos extends React.Component { 
  
  render() {
    return ( 
      <View style={styles.container}> 
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
              <MapView.Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324
              }}
              />

            </MapView>
           
      </View>
    );
  }
} 

export default MisPaseos;
 

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  map:{
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',

  },
});
