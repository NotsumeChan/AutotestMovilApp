import { View, StyleSheet } from "react-native";
import { GiftedChat, IMessage, Bubble, BubbleProps } from "react-native-gifted-chat";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from 'expo-linear-gradient';
const CustomBubble = (props : BubbleProps<IMessage>) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          // Estilo de la burbuja para los mensajes enviados
          backgroundColor: Colors.light,
          borderRadius: 0,
          borderTopLeftRadius : 10,
          borderBottomLeftRadius : 10,
          marginBottom: 10,
          right: -10,
          justifyContent: "flex-end",
          marginLeft: 0
        },
        left: {
          // Estilo de la burbuja para los mensajes recibidos
          backgroundColor: Colors.dark,
          borderRadius: 0,
          borderTopRightRadius : 10,
          borderBottomRightRadius : 10,
          marginBottom: 10,    
          left: -55,

        },
      }}
      textStyle={{
        right: {
          // Estilo del texto de los mensajes enviados
          color: '#fff',
        },
        left: {
          // Estilo del texto de los mensajes recibidos
          color: '#fff',
        },
      }}
    />
  );
};
const Teacher = () => {
  const Context = {
    User: {
      _id: 12,
      name: "User",
      avatar: "https://place"
    }
  };
  function sendMessage(input: string) {
    const NewMessage: IMessage = {
      _id: messages.length + 1,
      text: input,
      createdAt: new Date(),
      user: Context.User,
    };
    setMessages((prevMessages) => [NewMessage, ...prevMessages]);
  }
  const [messages, setMessages] = useState<IMessage[]>([{
    _id: 1,
    text: "Soy tu Profesor, ¿En qué puedo ayudarte?",
    createdAt: new Date(),
    user: {_id:2, name: "Profesor", avatar: "https://place"},
  }]);
    return(
        <View style={{ flex: 1 }}>
          <LinearGradient colors={[Colors.beach , Colors.light]} start={{x:0 , y:0.5}} end={{x:0,y:.9}} style={{position: 'absolute',left: 0,right: 0,top: 0,height: "100%"}} />
          <GiftedChat
          
          renderBubble={CustomBubble}
          renderUsernameOnMessage={true}
          messages={messages}
          onSend={input => sendMessage(input[0].text)}
          user={{_id: Context.User._id}}
          />
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