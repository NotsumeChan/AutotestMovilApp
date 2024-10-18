import { View, StyleSheet, Text, FlatList } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useRef, useState } from 'react';
import { Appbar } from "react-native-paper";
import { Video, ResizeMode } from "expo-av";
import Card from "../../components/Card";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from "expo-image";


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
      <LinearGradient colors={[Colors.beach , Colors.light]} start={{x:0.4 , y:0.5}} end={{x:0,y:.85}} style={{position: 'absolute',left: 0,right: 0,top: 0,height: "100%"}} />
      <Appbar.Header  style={{left:0, height:40, backgroundColor:"transparent", position:"absolute"}} >
        <Appbar.BackAction onPress={() => {router.back()}}/>
      </Appbar.Header>
      <View>
        <Text style={{textAlign: 'center', fontSize: 32, fontWeight: 'bold', margin: 20}}>Lecciónes</Text>

        {status.isPlaing == null && 
        <View style={{backgroundColor:'rgba(8, 88, 119, 0.7)', height:180}}>
          <Text style={{textAlign: 'center', paddingVertical:60, fontSize: 10, fontWeight: 'bold', margin: 20}}>Cargando...</Text>
        </View>}  
       
        <Video
          ref={video}
          style={styles.video}
          source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={setStatus}
          />

        <View style={styles.block}>
          <FlatList
              data={objetos}
              keyExtractor={(index) => `${index.id}`}
              renderItem={({ item }) => (
                <View>
                  <Image source={"../assets/images/Vector.svg"} style={{width:10, height:18}}/>
                  <Card titulo={item.titulo} cuerpo={item.cuerpo} imagenes={item.imagenes} />
                </View>
              )}
              />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  video: {
    flex: 1,

  },
  buttons: {
    margin: 16
  },
  block: {
    backgroundColor: Colors.light,
    borderRadius:30,
    paddingHorizontal: 31,
    paddingVertical:11,
    margin: 21,
    marginTop:21,
    elevation: 5,
  },
});

export default Lesson;


