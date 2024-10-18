import { Text, View, StyleSheet, FlatList } from "react-native";
import { Link, router } from "expo-router";
import { useState, useEffect, useContext } from "react";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
//import BottomNavBar from "../../component/BottomNavBar";

const Profile = () => {
  const Context = {User: {name: "Mariela"}};
  const params = useLocalSearchParams();
  const [listConfig, setListConfig] = useState([
    {
      title: "Configuracion 1",
      action : () => {
        console.log("Configuracion 1");}
    },
    {
      title: "Configuracion 2",
      action : () => {
        console.log("Configuracion 2");},
    },
    {
      title: "Cerrar sesion",
      action : () => {
        router.navigate("/");}
    }
  ]);
    return(
        <View style={styles.container}>
          <LinearGradient colors={['#E8D7BD' , '#055776']} start={{x:0.2 , y:0.6}} end={{x:0.4,y:1}} style={{position: 'absolute',left: 0,right: 0,top: 0,height: "100%"}} />
            <Image source={require('../../assets/images/UserIcon.svg')} style={{width: 271, height: 271, marginVertical: 20}}/>
            <Text style={{color: Colors.dark, fontSize: 32, marginVertical: 20, position:"absolute", top:200}}>{Context.User.name}</Text>
            <FlatList
            data={listConfig}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.text} onPress={item.action}>{item.title}</Text>
              </View>
            )}
            />           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#51565e",
    },
    text: {
      fontSize:10, 
        backgroundColor:Colors.light,
        textAlign: 'center',
        paddingVertical:12,
        marginVertical:20,
        overflow:"hidden", 
        color:"#FFFFFF", 
        width:400,
    },
});

export default Profile;