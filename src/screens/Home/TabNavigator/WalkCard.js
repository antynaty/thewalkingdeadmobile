import React from 'react';
import { 
  StyleSheet, 
  Text,
  AppRegistry,
  FlatList,
  View,
  Image,
  TouchableOpacity
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
 
import Map from './Map';  

class WalkCard extends React.Component { 
    constructor (){
        super()
        this.state = {
            dataSource:[],  
        }
    }
    renderItem = ({item}) => {
        const {navigation} = this.props;
        const email = navigation.getParam('email','NO-EMAIL');
        const password = navigation.getParam('password','NO-PASSWORD');
        
        return (
            <View style={styles.flatItem}>
                <Text> Hola 3</Text>
                {/* <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Map' ,{
                        email: email,
                        password: password, 
                    })
                }}>> */}
                <Text> pase la wea de navegacion</Text>
                    <Image style={styles.imagen1}
                        source = {{uri: item.picture }} />
                    <Image style={styles.itemHorario}
                        source = {{uri: item.picture }} />
                    <Image style={styles.itemHorario}
                        source = {{uri: item.picture }} />
                    <View style={styles.flatContent}> 
                        <Text style={styles.itemHorario}>
                            {item.horario}
                        </Text>

                        <Text style={styles.itemComentario}>
                            {item.comentario}
                        </Text> 
                    </View> 
                {/* </TouchableOpacity> */}
                
                
               
            </View>  
        ) 
    }

    renderSeparator = () => {
        return ( 
            <View
                style={{ height:2, width:'100%', backgroundColor:'white' }}
            >
            </View>
        )
    }
    componentWillMount (){

        const url = 'http://192.168.0.13:3001/paseo/all/' 
        //fetch(url)
        fetch(url, {
            method: 'GET',
        })
        .then((response) => response.json() )
        .then( ( responseJson)=> {
            this.setState({
                dataSource: responseJson.data});
        })
        .catch((error) => {
            console.log(error)
        })   

    }
    componentDidlMount (){

       
    }
    render() {
        
        return (
            
            <View style={styles.container}>

                <Text> Hola 1</Text>
                <FlatList  
                    data = {this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={this.renderSeparator}
                /> 

                <Text> Hola 2</Text>
            </View> 
            
        );
    }
}

export default WalkCard;
const styles = StyleSheet.create({ 
    titulo:{
        textAlign: 'center',
        fontSize: 21,
        marginTop: 5,
        opacity:0.9,
        backgroundColor: '#89B43F'
    },
    imagen1:{
        width: 100, 
        height:100

    }
});
AppRegistry.registerComponent('App', () => App);
 