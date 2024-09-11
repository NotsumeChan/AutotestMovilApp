import { View, StyleSheet, Text, FlatList } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useRef, useState } from 'react';
import { Appbar } from "react-native-paper";
import { Video } from "expo-av";
import Card from "../../components/Card";

const Lesson = () => {
  const id = useLocalSearchParams();
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const objetos = [
    {
      id:0,
      titulo: "Objeto 1",
      cuerpo: "Descripción del objeto 1.",
      imagenes: "imagen1.jpg"
    },
    {
      id:1,
      titulo: "Objeto 2",
      cuerpo: "Descripción del objeto 2.",
      imagenes: "imagen2.jpg"
    },
    {
      id:2,
      titulo: "Objeto 3",
      cuerpo: "Descripción del objeto 3.",
      imagenes: "imagen3.jpg"
    },
  ];
  
  return (
    <View style={styles.container}>
      <Appbar.Header style={{width : "100%", height:40, marginTop:-40}}>
        <Appbar.BackAction onPress={() => router.back()} />
      </Appbar.Header>
      <Video
        ref={video}
        style={styles.video}
        source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={setStatus}
      />

       <FlatList
          data={objetos}
          keyExtractor={(index) => `${index.id}`}
          renderItem={({ item }) => (
            <Card titulo={item.titulo} cuerpo={item.cuerpo} imagenes={item.imagenes} />
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
    height: 30,
  },
  buttons: {
    margin: 16
  }
});

export default Lesson;


