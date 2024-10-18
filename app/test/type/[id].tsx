import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Appbar, RadioButton } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from "@/constants/Colors";
import { useState } from "react";

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
            <LinearGradient colors={[Colors.beach, Colors.light]} start={{x:0.2 , y:0.4}} end={{x:0,y:.85}} style={{position: 'absolute',left: 0,right: 0,top: 0,height: "100%"}} />
            <Appbar.Header  style={{left:0, height:40, backgroundColor:"transparent", position:"absolute"}} >
                <Appbar.BackAction onPress={() => router.back()}/>
            </Appbar.Header>
            <View style={{ marginHorizontal: 20,marginTop:30}}>
                <Text style={{marginBottom:20, marginLeft:10, fontSize: 20}}>Prueba tipo {-1 == parseInt(id.id) ? "general" : parseInt(id.id)+1}</Text>
                <Text style={{marginLeft:10}}> Preguna N°{actualQuestion +1}</Text>
                <Text style={{fontSize:20,marginLeft:10}} >{questionList[actualQuestion].pregunta}</Text>
                <FlatList
                    data={questionList[actualQuestion].respuestass}
                    
                    renderItem={({ item }) => (
                        <View >
                            <TouchableOpacity onPress={() => setradioGroup(item)} style={{flexDirection:"row", 
                                                                                        marginVertical:"auto", 
                                                                                        backgroundColor:Colors.light, 
                                                                                        marginTop:20, paddingVertical:5, 
                                                                                        paddingHorizontal:10,
                                                                                        borderRadius:10,
                                                                                    }}>
                                <RadioButton
                                value={item}
                                status={radioGroup === item ? "checked" : "unchecked"}
                                color="#E8D7BD"
                                /> 
                                <Text style={{color:Colors.white,marginVertical:"auto"}}>{item}</Text>
                            </TouchableOpacity>    

                        </View>
                    )}/>
                <TouchableOpacity onPress={() =>actualQuestion+1 != questionList.length ? setactualQuestion(actualQuestion+1) : router.push({pathname:"../type/resultado",params:{goods:10, bads:2}} ) } style={{flexDirection:"row", marginVertical:"auto" }}>
                    <Text style={{fontSize:10, 
                                backgroundColor:Colors.dark,
                                textAlign: 'center',
                                paddingVertical:6, 
                                color:Colors.white, 
                                width:400,
                                bottom:-90,
                                marginLeft:-20}}>
                        {actualQuestion+1 != questionList.length ? "Siguiente" : "resultado"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      }
});

export default TestType;