import { Text, ScrollView,View, StyleSheet, TextInput, Platform, TouchableOpacity } from "react-native";

import { useState } from "react";

const Teacher = () => {
  function sendMessage(input: string) {
    const message = {
      isYou: true,
      hour: new Date().getTime(),
      content: input
    };
    setMessages((prevMessages) => [...prevMessages, message]);
    setText('');
  }
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([
    { isYou: true, hour: 1620263151, content: "¡Hola! ¿Cómo estás?" },
    { isYou: false, hour: 1620263251, content: "Hola, estoy bien gracias." },
    { isYou: true, hour: 1620263351, content: "¿Qué has estado haciendo últimamente?" },
    { isYou: false, hour: 1620263451, content: "He estado trabajando en un nuevo proyecto." },
    { isYou: true, hour: 1620263551, content: "Suena interesante. ¿Puedo saber más al respecto?" },
    { isYou: false, hour: 1620263651, content: "¡Claro! Es un proyecto de desarrollo web." },
    { isYou: true, hour: 1620263751, content: "Genial, me encanta el desarrollo web." },
    { isYou: false, hour: 1620263851, content: "Sí, es muy gratificante ver tus creaciones cobrar vida en la web." },
    { isYou: true, hour: 1620263951, content: "Totalmente de acuerdo. Es emocionante." },
    { isYou: false, hour: 1620264051, content: "Bueno, tengo que irme. ¡Hablamos luego!" }
  ]);
// !TODO: fix the position of the sender
// and the scroll issue
    return(
      <View style={styles.container}>
        <Text>a</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#51565e",
    },
    text: {
      color: "#fff",
    },
    sender:{
      bottom: -35,
      position: "absolute",
      backgroundColor: "#fff",
      flexDirection: "row",
    },
    input: {
      
      padding: 10,
      margin: 7,
      width: 250,
      overflow: "hidden",
      borderRadius:12,
      backgroundColor: "#aaa",
    },
    send:{
      fontSize: 40,
      margin: 7,
      color: "#000",
    }
});

export default Teacher;