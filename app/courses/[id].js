import { Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import { useState, useEffect } from "react";
import Collapsible from "react-native-collapsible";
//import BottomNavBar from "../../component/BottomNavBar";
import { Link, router } from "expo-router";
//import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { Appbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar"; //ver el tema de lograr un porcertaje de carga de forma circular
import { Audio } from "expo-av";


const Courses = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false); //use this to manage the play/pause button
  const [url, setUrl] = useState('http://foo/bar.mp3'); //remember to change this to a promise or the jsonparser
  const [data, setData] = useState([
    {
      title: 'Unidad 1',
      isCollapsed: true,
      lessonid: "0",
      content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna sed odio blandit porta. Nullam",
    },
    {
      title: 'Unidad 2',
      isCollapsed: true,
      content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna sed odio blandit porta. Nullam",
      lessonid: "1",
      
    },
  ]);
  const music = async() =>{
    const { sound: audioSound }  = await Audio.Sound.createAsync(
      { uri: url },
      { shouldPlay: true }
    );
    setSound(podaudioSoundcast);
    await sound.playAsync();
  }
  const stopMusic = async () => {
    if (sound) {
      await sound.stopAsync();
    }
  };
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleCollapsPress = (index) => {
    setData(data.map((item, i) => {
      if (i === index) {
        return {...item, isCollapsed:!item.isCollapsed };
      }
      return item;
    }));
  };
 // !TODO : remember to change te bottomnavbar to an appbar to go back to the previous page
 // make it a component and import it
  return (
    <View style={styles.container}>
      <Appbar.Header style={{width : "100%", height:40, marginTop:-40}}>
        <Appbar.BackAction onPress={() => router.back()} style={{left:0}} />
      </Appbar.Header>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Tu Lista de Unidades</Text>
        <Text style={{size : 20, color : "#ffb"}}>Podcast</Text>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={music}>
          </TouchableOpacity>
          <TouchableOpacity onPress={stopMusic}>
            
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleCollapsPress(index)} style={styles.collapsable}>
              <Text style={styles.title}>{item.title}</Text>
              <Collapsible collapsed={item.isCollapsed}>
                <Text style={styles.text}>{item.content}</Text>
                <Link push href={`/lesson/${item.lessonid}`}>Ir a lección</Link>
              </Collapsible>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#51565e",
      
    },
    title:{
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
    text: {
      color: "#fff",
    },
    collapsable:{
      backgroundColor: "#999",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: 6,
      margin: 5,
    }
});

export default Courses;