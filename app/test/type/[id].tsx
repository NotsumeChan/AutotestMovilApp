import { useState, useRef } from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Appbar, RadioButton } from "react-native-paper";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const TestType = () => {
    const id = useLocalSearchParams();
    id.id = String(id.id) ?? "";
    const [radioGroup, setradioGroup] = useState("");
    const [actualQuestion, setactualQuestion] = useState(0);
    const questionList= [
        {
            id: 0,
            title: "Pregunta 1",
            pregunta: "¿Cual es la capital de Mexico?",
            buenas: 3,
            respuestass : [
                "random answer 1",
                "random answer 2",
                "random answer 3",
                "random answer 4",
                "random answer 5"
            ]
        },
        {
            id: 1,
            title: "Pregunta 2",
            pregunta: "¿Cual es la capital de Canada?",
            buenas: 2,
            respuestass : [
                "random answer 1",
                "random answer 2",
                "random answer 3",
                "random answer 4",
                "random answer 5"
            ]
        },
        {
            id: 2,
            title: "Pregunta 3",
            pregunta: "¿Cual es la capital de Estados Unidos?",
            buenas: 4,
            respuestass : [
                "random answer 1",
                "random answer 2",
                "random answer 3",
                "random answer 4",
                "random answer 5"
            ]
        },
        {
            id: 3,
            title: "Pregunta 4",
            pregunta: "¿Cual es la capital de Argentina?",
            buenas: 1,
            respuestass : [
                "random answer 1",
                "random answer 2",
                "random answer 3",
                "random answer 4",
                "random answer 5"
            ]
        },
    ];
    return(
        <View style={styles.container}>
            <Appbar.Header  style={{width : "100%", height:40, marginLeft:-15}} >
                <Appbar.BackAction onPress={() => router.back()}/>
            </Appbar.Header>
            <LinearGradient colors={['#E8D7BD' , '#055776']} start={{x:0.2 , y:0.4}} end={{x:0,y:.85}} style={{position: 'absolute',left: 0,right: 0,top: 0,height: "100%"}} />
            <View style={{ marginHorizontal: 20,}}>
                <Text style={{marginBottom:20, marginLeft:10, fontSize: 20}}>Prueba tipo {-1 == parseInt(id.id) ? "general" : parseInt(id.id)+1}</Text>
                <Text style={{marginLeft:10}}> Preguna N°{actualQuestion +1}</Text>
                <Text style={{fontSize:20,marginLeft:10}} >{questionList[actualQuestion].pregunta}</Text>
                <FlatList
                    data={questionList[actualQuestion].respuestass}
                    
                    renderItem={({ item }) => (
                        <View >
                            <TouchableOpacity onPress={() => setradioGroup(item)} style={{flexDirection:"row", 
                                                                                        marginVertical:"auto", 
                                                                                        backgroundColor:"#085877", 
                                                                                        marginTop:20, paddingVertical:5, 
                                                                                        paddingHorizontal:10,
                                                                                        borderRadius:10,
                                                                                    }}>
                                <RadioButton
                                value={item}
                                status={radioGroup === item ? "checked" : "unchecked"}
                                color="#E8D7BD"
                                /> 
                                <Text style={{color:"#FFFFFF",marginVertical:"auto"}}>{item}</Text>
                            </TouchableOpacity>    

                        </View>
                    )}/>
                <TouchableOpacity onPress={() =>actualQuestion+1 != questionList.length ? setactualQuestion(actualQuestion+1) : router.push({pathname:"../type/resultado",params:{goods:10, bads:2}} ) } style={{flexDirection:"row", marginVertical:"auto" }}>
                    <Text style={{fontSize:10, 
                                backgroundColor:"#1D2833",
                                textAlign: 'center',
                                paddingVertical:6,
                                overflow:"hidden", 
                                color:"#FFFFFF", 
                                width:400,
                                position: "absolute",
                                bottom:-100,
                                marginLeft:-20}}>
                        {actualQuestion+1 != questionList.length ? "Siguiente" : "resultado"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
      }
});

export default TestType;