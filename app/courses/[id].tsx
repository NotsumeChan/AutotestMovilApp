import { Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import { useState } from "react";
import Collapsible from "react-native-collapsible";
import { Image } from "expo-image";
//import BottomNavBar from "../../component/BottomNavBar";
import { Link, router } from "expo-router";
import { Appbar } from "react-native-paper";
//import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from "@/constants/Colors";

const Home = () => {
  
  const [data, setData] = useState([
    {
      title: 'Leccion 1',
      isCollapsed: true,
      icon: "directions-car",
      lessonid: "0",
      content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna sed odio blandit porta. Nullam",
    },
    {
      title: 'Leccion 2',
      isCollapsed: true,
      icon: "motorcycle",
      content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna sed odio blandit porta. Nullam",
      lessonid: "1",
      
    },
  ]);
  const handlePress = (index: number) => {
    setData(data.map((item, i) => {
      if (i === index) {
        return {...item, isCollapsed:!item.isCollapsed };
      }
      return item;
    }));
  };

  var EmpezarButton = "";
  //<Icon name={item.icon} size={item.isCollapsed ? 35 : 50}/>
  //color={MD3Colors.blue500}
  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.beach , Colors.light]} start={{x:0.4 , y:0.5}} end={{x:0,y:.85}} style={{position: 'absolute',left: 0,right: 0,top: 0,height: "100%"}} />
      <Appbar.Header  style={{left:0, height:40, backgroundColor:"transparent", position:"absolute"}} >
        <Appbar.BackAction onPress={() => {router.back()}}/>
      </Appbar.Header>
      <View>
        <Text style={{fontSize:32, marginTop:48, marginBottom:28, textAlign:"center"}}>Lecciones</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handlePress(index)} style={styles.collapsable}>
            <View style={{padding:20}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginLeft:-60}}>
                <Image
                source={require('../../assets/images/car.png')}
                style={{ width: 38, height: 31}}
                />
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Collapsible collapsed={item.isCollapsed}>
                <Text style={[styles.text, {padding:13}]}>{item.content}</Text>
                
              </Collapsible>
                <View style={[styles.mainbutton, {display:item.isCollapsed?  "none" : "flex"}]}>
                  <Link style={{marginHorizontal:"auto", color: "#E8D7BD",}} push href={`lesson/${item.lessonid}`}>Empezar</Link>
                </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
      />
     
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title:{
      color: "#fff",
      fontSize: 24,
      marginLeft: 10,
    },
    text: {
      color: "#fff",
      fontSize:12
    },
    collapsable:{
      backgroundColor: "#085877",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: 20,
      marginHorizontal: 23,
      marginBottom:15
    },
    mainbutton:{
      paddingHorizontal:6, 
      paddingVertical:3, 
      marginVertical: 10,
      marginHorizontal: "auto",
      borderColor: "#E8D7BD", 
      borderWidth:2,  
      width:200,
      borderRadius:10
    }
});

export default Home;