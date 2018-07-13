import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
 
class EditarPerfil extends React.Component {
  static navigationOptions = ({navigation}) => {
    return { 
        title: "Mi Perfil " 
    }
}
  render() {
    return ( 
      <View style={styles.container}> 
              <Text> Editar Perfil</Text>
      </View>
    );
  }
} 

export default EditarPerfil;
 

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  }
});
