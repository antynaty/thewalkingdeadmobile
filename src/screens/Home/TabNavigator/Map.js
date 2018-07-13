import React from 'react';
import { 
  StyleSheet, 
  Text,
  AppRegistry,
  Dimensions,
  View
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
 
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height 
class Map extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        isMapReady: false,
        region: {
          latitude: 47.6062,
          longitude: 122.3321,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        }
      }
    }
  
    onMapLayout = () => {
      this.setState({ isMapReady: true });
    }
  
    render () {
      return (
        <View style={styles.container}>
          <MapView
            onPress={e => console.log(e.nativeEvent)}
            style={styles.map}
            provider='google'
            mapType='standard'
            showsScale
            showsCompass
            showsPointsOfInterest
            showsBuildings
            region={this.state.region}
            onLayout={this.onMapLayout}
          >
            { this.state.isMapReady &&
              <MapView.Marker
                title={this.props.title}
                coordinate={{
                  latitude: this.state.region.latitude,
                  longitude: this.state.region.longitude
                }} />
            }
          </MapView>
        </View>
      )
    }
  
  }

export default Map;

const styles = StyleSheet.create({ 
    containter:{ 
        flex:1
    },
    map:{ 
      flex: 1,
      height: height,
      width: width 
    }
});
AppRegistry.registerComponent('App', () => App);
 
 