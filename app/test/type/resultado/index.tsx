import { useState, useRef } from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Appbar, RadioButton } from "react-native-paper";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
//import BottomNavBar from "../../../../component/BottomNavBar";


const resultado = () => {
    const content = useLocalSearchParams();
    return(
        <View style={styles.container}>
            <Appbar.Header  style={{width : "100%", height:40, marginTop:-40}} >
                <Appbar.BackAction onPress={() => router.back()}/>
            </Appbar.Header>
            <Text>Resultado</Text>
            <Text>{content.goods}/{content.goods +content.bads}</Text>
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
      }
});
export default resultado;