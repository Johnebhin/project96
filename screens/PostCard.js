import React,{Compenent} from "react";
import { View,Text,StyleSheet,SafeAreaView,Platform,StatusBar,Image } from "react-native";

export default class PostCard extends Compenent{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                <View style={styles.autherName}>
                    <Text style={styles.autherNameText}>
                        {this.props.post.author}
                    </Text>
                </View>
                <Image
                source={require('../assets?post.jpg')}
                style={styles.postImage}
                />
                <View style={styles.captionContainer}>
                <Text style={styles.captionText}>
                      {this.props.post.caption}
                   </Text>
                 </View>
                </View>
            </View>
        );
    }
}
const style=StyleSheet.create({
    container:{
        flex:1,
    },
    cardContainer:{
        margin:10,
        backgroundColor:"white",
        borderRadius:10,
        padding:15,
    },
    autherNameContainer:{
        fliex:0.85,
        justifyContent:'center',
    },
    autherNameText:{
        fontSize:20
    },
    postImage:{
     marginTop:10,
     resizeMode:'contain',
     width:'100',
     alignSelf:'center',
     height:275,
    },
    captionText:{
        paddingTop:10,
    },
});