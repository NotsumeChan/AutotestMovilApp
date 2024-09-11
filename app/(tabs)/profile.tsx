import { Text, View, StyleSheet, FlatList } from "react-native";
import { Link, router } from "expo-router";
import { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
//import BottomNavBar from "../../component/BottomNavBar";

const Profile = () => {
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
            <Text style={styles.text}>Bienvenido a tu perfil {params.uid}</Text> 
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
      color: "#fff",
      padding: 5,
    },
});

export default Profile;