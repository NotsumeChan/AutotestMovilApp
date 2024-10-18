import { useState, useRef } from "react";
import { Link, router } from "expo-router";
import { Appbar, RadioButton } from "react-native-paper";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Test = () => {
    const [radioGroup, setradioGroup] = useState(-1);
    const lessonList = [
        {
            id: -1,
            title: "Selecciona una Leccion",
        },
        {
            id:0,
            title: "Leccion 1",
        },
        {
            id:1,
            title: "Leccion 2",
        },
        {
            id:2,
            title: "Leccion 3",
        },
        {
            id:3,
            title: "Leccion 4",
        },
        {
            id:4,
            title: "Leccion 5",
        },

    ];

    return(
        <View style={styles.container}>
            <LinearGradient colors={['#E8D7BD' , '#055776']} start={{x:0.2 , y:0.4}} end={{x:0,y:.85}} style={{position: 'absolute',left: 0,right: 0,top: 0,height: "100%"}} />
            <View style={{justifyContent: "center"}}>
                <Text style={{margin:"auto", fontSize:32, marginTop:44, marginBottom:17}}> Pruebas </Text>
                <View style={{backgroundColor:"#085877", paddingVertical:15, width:400}}>
                    <Text style={{marginHorizontal:"auto", fontSize:20, color:"#FFFFFF"}}>Selecciona una Leccion</Text>
                </View>
                <FlatList
                data={lessonList}
                renderItem={({ item }) => (
                    <View >
                       
                        <TouchableOpacity onPress={() => setradioGroup(item.id)} style={styles.test}>
                                
                            <RadioButton
                            value={item.title}
                            status={radioGroup === item.id ? "checked" : "unchecked"}
                            />
                            <Text style={[styles.radioText, {color:"#FFFFFF", marginVertical:"auto", marginHorizontal:"auto"}]}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                contentContainerStyle={{height:100, flex:2}}
                />
                
                <Link push href={"test/type/"+radioGroup} style={styles.button}>
                Ir a la Prueba
                </Link>
            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    button: {fontSize:10, 
        backgroundColor:"#1D2833",
        textAlign: 'center',
        paddingVertical:12,
        overflow:"hidden", 
        color:"#FFFFFF", 
        width:400,
        position: "absolute",
        bottom:"20%",
        },
    input: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
    },
    radioText: {
        fontSize: 16,
    },
    radioInput: {
        margin: 10,
    },
    test:{flexDirection:"row",
        marginVertical:"auto",
        marginHorizontal:"auto", 
        backgroundColor:"#085877", 
        marginTop:20, 
        paddingVertical:5, 
        paddingHorizontal:10,
        borderRadius:10,
        width:300,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 }, // Ajusta la sombra hacia abajo
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Propiedades para Android
        elevation: 3,
        },
});

export default Test;