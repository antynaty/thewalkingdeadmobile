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
                <Image style={{ width: 100, height:100}}
                    source = {{uri: item.picture }} />
                <Image style={{ width: 100, height:100}}
                    source = {{uri: item.picture }} />
                <Image style={{ width: 100, height:100}}
                    source = {{uri: item.picture }} />        
                <View style={styles.flatContent}> 
                    <Text style={styles.itemTextName}>
                        {item.paseador}
                    </Text>
                    <Text style={styles.itemTextAbout}>
                        {item.comentario}
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
        const url = 'http://23.45.42.23:3001/paseo/all'
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
