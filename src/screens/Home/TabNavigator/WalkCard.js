import React from 'react';
import { 
  StyleSheet, 
  Text, 
  FlatList,
  View,
  Image,
  AppRegistry
   
} from 'react-native';  

class WalkCard extends React.Component {
    constructor (){
        super()
        this.state = {
            dataSource:[]
        }
    }
    renderItem = ({item}) => {
        return (

            <View style={styles.flatItem}> 
                <View style={styles.flatContent}>
                    <Text style={styles.itemTextName}>
                        FOTOS FALTAN AGREGAR
                    </Text> 
                    <Text style={styles.itemTextName}>
                        Nombre Paseador:
                    </Text>
                    <Text style={styles.itemTextName}>
                        {item.paseador}
                    </Text>
                    <Text style={styles.itemTextAbout}>
                        Comentario paseo:
                    </Text>
                    <Text style={styles.itemTextAbout}>
                        {item.comentario}
                    </Text>
                    <Text style={styles.itemTextAbout}>
                        Modulo del paseo:
                    </Text>
                    <Text style={styles.itemTextAbout}>
                        {item.horario}
                    </Text>
                </View> 
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

    }
    componentDidMount (){
        this.getPaseo();  
    }

    // componentDidMount (){
    //     const url = 'http://192.168.1.159:3001/perro/all'
    //     fetch(url)
    //     .then((response) => response.json() ) 
    //     .catch((error) => {
    //         console.log(error)
    //     })  
    // }

    getPaseo (){
        const url = 'http://192.168.1.159:3001/paseo/dueno/1'
        fetch(url)
        .then((response) => response.json() )
        .then( ( responseJson)=> {
            this.setState({
                dataSource: responseJson.data});
        })
        .catch((error) => {
            console.log(error)
        })  
    }
    render() { 
        return (
            <View style={styles.container}> 

                {/* <View  >
                    <Text> {this.state.dataSource.comentario} </Text>
                    <Text> {this.state.dataSource.horario} </Text>
                    <Text>{this.state.dataSource.paseador} </Text>
                </View  > */}
 
                <FlatList  
                    data = {this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={this.renderSeparator}
                /> 
            </View> 
        );
    }
}

export default WalkCard;

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#C0D894'
    },  
    flatItem: {
        flex: 1,
        flexDirection:'row',
    },  
    flatContent:{
        flex:1,
        justifyContent:'center',
        marginLeft:5
    },
    itemTextName:{
        fontSize:19
    },
    itemTextAbout:{
        fontSize:17
    }
});
