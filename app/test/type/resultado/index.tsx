import { useState, useRef } from "react";
import {  router, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";


const resultado = () => {
    const content = useLocalSearchParams();
    return(
        <View style={styles.container}>
        <LinearGradient colors={[Colors.beach , Colors.light]} start={{x:0.4 , y:0.5}} end={{x:0,y:.85}} style={{position: 'absolute',left: 0,right: 0,top: 0,height: "100%"}} />
        <Text style={{textAlign: 'center', fontSize: 32, fontWeight: 'bold', margin: 20, marginTop:40}}>Resultado</Text>
        <View style={styles.block}>
            <Text style={[styles.text, {marginTop:40}]}>Buenas: {content.goods}</Text>
            <Text style={styles.text}>Malas: {content.bads}</Text>
            <Text  style={styles.resultado}>Resultado: {(Number(content.goods)*2) - Number(content.bads)}</Text>
            
            
            <TouchableOpacity onPress={()=>{router.back(); router.back()}} style={styles.button}>
                <Text style={styles.text}>Volver</Text> 
            </TouchableOpacity>
        </View >

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
      },
      block: {
        backgroundColor: Colors.light,
        borderRadius:30,
        paddingHorizontal: 31,
        paddingVertical:11,
        margin: 21,
        marginTop:21,
        height:"60%",
        elevation: 5,
      },
      text :{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: Colors.white
      },
      resultado: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: Colors.white
      },
      button:{
        backgroundColor: Colors.dark,
        borderRadius: 10,
        padding: 10,
        marginTop:100,
        width: "50%",
        alignSelf: 'center',
        elevation: 5,
      }
});
export default resultado;