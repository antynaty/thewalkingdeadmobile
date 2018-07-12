import React from 'react';
import { 
  StyleSheet, 
  Text,
  AppRegistry,
  FlatList
} from 'react-native';
import { 
    Container, 
    Content, 
    Header,
    Left,
    Right,
    Card,
    CardItem
  } from 'native-base'; 

import MapView from 'react-native-maps'
 

export default class Map extends React.Component {

    render() {
        return ( 
                 
                <Content style={styles.container} > 
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
                </Content> 
            
        );
    }
}

const styles = StyleSheet.create({ 
    containter:{ 
        flex:1
    },
    map:{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
    
      }
});
AppRegistry.registerComponent('App', () => App);
 