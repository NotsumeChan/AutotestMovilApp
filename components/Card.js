import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const Card = ({titulo, cuerpo, imagenes}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.cuerpo}>{cuerpo}</Text>
            </View>
            <View style={styles.container}>
                <Image source={imagenes} style={styles.imagenes}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:41,
    },
    textContainer: {
        flexDirection: 'column',
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    },
    cuerpo: {
        fontSize: 16,
    },
    imagenes: {
        width: 50,
        height: 50,
        
    },
});

export default Card;