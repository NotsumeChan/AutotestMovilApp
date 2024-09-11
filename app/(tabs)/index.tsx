import { Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import { useState } from "react";
import Collapsible from "react-native-collapsible";
import { Image } from "expo-image";
//import BottomNavBar from "../../component/BottomNavBar";
import { Link, router } from "expo-router";
import { ProgressBar, MD3Colors } from "react-native-paper";
//import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  
  const [data, setData] = useState([
    {
      title: 'Curso clase B',
      isCollapsed: true,
      icon: "directions-car",
      lessonid: "0",
      content: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna sed odio blandit porta. Nullam",
    },
    {
      title: 'Curso Clase C',
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
      <LinearGradient colors={['transparent' , '#055776']} start={{x:0.4 , y:0.5}} end={{x:0,y:.85}} style={{position: 'absolute',left: 0,right: 0,top: 0,height: "100%"}} />
      <View style={{flexDirection: "row", right:0, alignContent:"space-between", marginVertical:20}}>
        <Image
        source={require('../../assets/images/person.png')}
        style={{ width: 25, height: 25}}
        />
        <Image
        source={require('../../assets/images/config.png')}
        style={{ width: 25, height: 25}}
        />
      </View>
      <View>
        <Text style={{fontSize:32}}>Mis cursos</Text>
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
              <View style={{flexDirection: "row", justifyContent: "center"}}>
                <Text style={styles.text}>Progreso</Text>
                <ProgressBar progress={0}  style={{width : 192, height:7, margin:"auto", borderRadius:10, marginLeft:10}}/>
              </View>
                <View style={[styles.mainbutton, {display:item.isCollapsed?  "none" : "flex"}]}>
                  <Link style={{marginHorizontal:"auto", color: "#E8D7BD",}} push href={`courses/${item.lessonid}`}>Empezar</Link>
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
      flex: 3,
      alignItems: "center",
      backgroundColor: "#E8D7BD",
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
      margin: 5,
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